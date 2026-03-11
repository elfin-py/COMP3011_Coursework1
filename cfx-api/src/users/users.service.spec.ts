import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
  hash: jest.fn(),
}));

describe('UsersService', () => {
  const prisma = {
    user: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    profile: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  };

  let service: UsersService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new UsersService(prisma as any);
  });

  it('changes password when current password is valid', async () => {
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-1',
      passwordHash: 'old-hash',
    });
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    (bcrypt.hash as jest.Mock).mockResolvedValue('new-hash');

    const result = await service.changePassword('user-1', {
      currentPassword: 'Password1',
      newPassword: 'BetterPass2',
    });

    expect(bcrypt.compare).toHaveBeenCalledWith('Password1', 'old-hash');
    expect(bcrypt.hash).toHaveBeenCalledWith('BetterPass2', 10);
    expect(prisma.user.update).toHaveBeenCalledWith({
      where: { id: 'user-1' },
      data: { passwordHash: 'new-hash' },
    });
    expect(result).toEqual({ message: 'Password updated successfully' });
  });

  it('rejects incorrect current password', async () => {
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-1',
      passwordHash: 'old-hash',
    });
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    await expect(
      service.changePassword('user-1', {
        currentPassword: 'Password1',
        newPassword: 'BetterPass2',
      }),
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });

  it('rejects unchanged password', async () => {
    prisma.user.findUnique.mockResolvedValue({
      id: 'user-1',
      passwordHash: 'old-hash',
    });
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    await expect(
      service.changePassword('user-1', {
        currentPassword: 'Password1',
        newPassword: 'Password1',
      }),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('returns saved settings', async () => {
    prisma.profile.findUnique.mockResolvedValue({
      userId: 'user-1',
      homeLocation: 'Leeds',
      timezone: 'Europe/London',
    });

    await expect(service.getSettings('user-1')).resolves.toEqual({
      homeLocation: 'Leeds',
      timezone: 'Europe/London',
    });
  });

  it('throws when profile settings are missing', async () => {
    prisma.profile.findUnique.mockResolvedValue(null);

    await expect(service.getSettings('user-1')).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
