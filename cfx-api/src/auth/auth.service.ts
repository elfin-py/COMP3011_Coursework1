import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const [existingEmail, existingUsername] = await Promise.all([
      this.usersService.findByEmail(dto.email),
      this.usersService.findByUsername(dto.username),
    ]);
    if (existingEmail) {
      throw new ConflictException('Email already in use');
    }
    if (existingUsername) {
      throw new ConflictException('Username already in use');
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(dto.password, saltRounds);
    let user;
    try {
      user = await this.usersService.create({
        username: dto.username,
        email: dto.email,
        passwordHash,
        cityLat: dto.cityLat ?? 53.8008,
        cityLon: dto.cityLon ?? -1.5491,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new ConflictException('Email or username already in use');
      }
      throw e;
    }
    const tokens = this.issueTokens(user.id, user.email, user.username, user.role);
    return { user: this.sanitizeUser(user), tokens };
  }

  async validateUser(identifier: string, password: string) {
    const user = await this.usersService.findByIdentifier(identifier);
    if (!user) return null;
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return null;
    return user;
  }

  async login(identifier: string, password: string) {
    const user = await this.validateUser(identifier, password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const tokens = this.issueTokens(user.id, user.email, user.username, user.role);
    return { user: this.sanitizeUser(user), tokens };
  }

  async refresh(refreshToken: string) {
    let payload: { sub: string; email: string; username?: string; role: string };
    try {
      payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret',
      });
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.usersService.findById(payload.sub);
    if (!user) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const tokens = this.issueTokens(user.id, user.email, user.username, user.role);
    return { user: this.sanitizeUser(user), tokens };
  }

  private issueTokens(id: string, email: string, username: string, role: string) {
    const payload = { sub: id, email, username, role };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET || 'dev-access-secret',
      // allow ms-style strings like '900s'
      expiresIn: (process.env.JWT_ACCESS_EXPIRES as any) || '900s',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret',
      expiresIn: (process.env.JWT_REFRESH_EXPIRES as any) || '7d',
    });
    return { accessToken, refreshToken };
  }

  private sanitizeUser<T extends { passwordHash?: string }>(user: T) {
    const { passwordHash: _passwordHash, ...safe } = user;
    return safe;
  }
}
