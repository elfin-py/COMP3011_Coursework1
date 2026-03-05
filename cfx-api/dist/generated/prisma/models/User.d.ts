import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    items?: Prisma.ItemListRelationFilter;
    feedbacks?: Prisma.FeedbackListRelationFilter;
    shipments?: Prisma.ShipmentListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    items?: Prisma.ItemOrderByRelationAggregateInput;
    feedbacks?: Prisma.FeedbackOrderByRelationAggregateInput;
    shipments?: Prisma.ShipmentOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    items?: Prisma.ItemListRelationFilter;
    feedbacks?: Prisma.FeedbackListRelationFilter;
    shipments?: Prisma.ShipmentListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    items?: Prisma.ItemCreateNestedManyWithoutOwnerInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutUserInput;
    shipments?: Prisma.ShipmentCreateNestedManyWithoutFromUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutOwnerInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutUserInput;
    shipments?: Prisma.ShipmentUncheckedCreateNestedManyWithoutFromUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    items?: Prisma.ItemUpdateManyWithoutOwnerNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutUserNestedInput;
    shipments?: Prisma.ShipmentUpdateManyWithoutFromUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    items?: Prisma.ItemUncheckedUpdateManyWithoutOwnerNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    shipments?: Prisma.ShipmentUncheckedUpdateManyWithoutFromUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.UserUpsertWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProfileInput, Prisma.UserUpdateWithoutProfileInput>, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutItemsInput, Prisma.UserUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutItemsInput, Prisma.UserUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.UserUpsertWithoutItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutItemsInput, Prisma.UserUpdateWithoutItemsInput>, Prisma.UserUncheckedUpdateWithoutItemsInput>;
};
export type UserCreateNestedOneWithoutShipmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShipmentsInput, Prisma.UserUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShipmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutShipmentsInput, Prisma.UserUncheckedCreateWithoutShipmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutShipmentsInput;
    upsert?: Prisma.UserUpsertWithoutShipmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutShipmentsInput, Prisma.UserUpdateWithoutShipmentsInput>, Prisma.UserUncheckedUpdateWithoutShipmentsInput>;
};
export type UserCreateNestedOneWithoutFeedbacksInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFeedbacksInput, Prisma.UserUncheckedCreateWithoutFeedbacksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFeedbacksInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFeedbacksInput, Prisma.UserUncheckedCreateWithoutFeedbacksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFeedbacksInput;
    upsert?: Prisma.UserUpsertWithoutFeedbacksInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFeedbacksInput, Prisma.UserUpdateWithoutFeedbacksInput>, Prisma.UserUncheckedUpdateWithoutFeedbacksInput>;
};
export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.UserUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UserUpdateWithoutAuditLogsInput>, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserCreateWithoutProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ItemCreateNestedManyWithoutOwnerInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutUserInput;
    shipments?: Prisma.ShipmentCreateNestedManyWithoutFromUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutOwnerInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutUserInput;
    shipments?: Prisma.ShipmentUncheckedCreateNestedManyWithoutFromUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
};
export type UserUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ItemUpdateManyWithoutOwnerNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutUserNestedInput;
    shipments?: Prisma.ShipmentUpdateManyWithoutFromUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.ItemUncheckedUpdateManyWithoutOwnerNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    shipments?: Prisma.ShipmentUncheckedUpdateManyWithoutFromUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutItemsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutUserInput;
    shipments?: Prisma.ShipmentCreateNestedManyWithoutFromUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutItemsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutUserInput;
    shipments?: Prisma.ShipmentUncheckedCreateNestedManyWithoutFromUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutItemsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutItemsInput, Prisma.UserUncheckedCreateWithoutItemsInput>;
};
export type UserUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutItemsInput, Prisma.UserUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutItemsInput, Prisma.UserUncheckedCreateWithoutItemsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutItemsInput, Prisma.UserUncheckedUpdateWithoutItemsInput>;
};
export type UserUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutUserNestedInput;
    shipments?: Prisma.ShipmentUpdateManyWithoutFromUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    shipments?: Prisma.ShipmentUncheckedUpdateManyWithoutFromUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutShipmentsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    items?: Prisma.ItemCreateNestedManyWithoutOwnerInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutShipmentsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutOwnerInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutShipmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutShipmentsInput, Prisma.UserUncheckedCreateWithoutShipmentsInput>;
};
export type UserUpsertWithoutShipmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutShipmentsInput, Prisma.UserUncheckedUpdateWithoutShipmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutShipmentsInput, Prisma.UserUncheckedCreateWithoutShipmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutShipmentsInput, Prisma.UserUncheckedUpdateWithoutShipmentsInput>;
};
export type UserUpdateWithoutShipmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    items?: Prisma.ItemUpdateManyWithoutOwnerNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutShipmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    items?: Prisma.ItemUncheckedUpdateManyWithoutOwnerNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutFeedbacksInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    items?: Prisma.ItemCreateNestedManyWithoutOwnerInput;
    shipments?: Prisma.ShipmentCreateNestedManyWithoutFromUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFeedbacksInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutOwnerInput;
    shipments?: Prisma.ShipmentUncheckedCreateNestedManyWithoutFromUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFeedbacksInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFeedbacksInput, Prisma.UserUncheckedCreateWithoutFeedbacksInput>;
};
export type UserUpsertWithoutFeedbacksInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFeedbacksInput, Prisma.UserUncheckedUpdateWithoutFeedbacksInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFeedbacksInput, Prisma.UserUncheckedCreateWithoutFeedbacksInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFeedbacksInput, Prisma.UserUncheckedUpdateWithoutFeedbacksInput>;
};
export type UserUpdateWithoutFeedbacksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    items?: Prisma.ItemUpdateManyWithoutOwnerNestedInput;
    shipments?: Prisma.ShipmentUpdateManyWithoutFromUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFeedbacksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    items?: Prisma.ItemUncheckedUpdateManyWithoutOwnerNestedInput;
    shipments?: Prisma.ShipmentUncheckedUpdateManyWithoutFromUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    items?: Prisma.ItemCreateNestedManyWithoutOwnerInput;
    feedbacks?: Prisma.FeedbackCreateNestedManyWithoutUserInput;
    shipments?: Prisma.ShipmentCreateNestedManyWithoutFromUserInput;
};
export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutOwnerInput;
    feedbacks?: Prisma.FeedbackUncheckedCreateNestedManyWithoutUserInput;
    shipments?: Prisma.ShipmentUncheckedCreateNestedManyWithoutFromUserInput;
};
export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
};
export type UserUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    items?: Prisma.ItemUpdateManyWithoutOwnerNestedInput;
    feedbacks?: Prisma.FeedbackUpdateManyWithoutUserNestedInput;
    shipments?: Prisma.ShipmentUpdateManyWithoutFromUserNestedInput;
};
export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    items?: Prisma.ItemUncheckedUpdateManyWithoutOwnerNestedInput;
    feedbacks?: Prisma.FeedbackUncheckedUpdateManyWithoutUserNestedInput;
    shipments?: Prisma.ShipmentUncheckedUpdateManyWithoutFromUserNestedInput;
};
export type UserCountOutputType = {
    items: number;
    feedbacks: number;
    shipments: number;
    auditLogs: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | UserCountOutputTypeCountItemsArgs;
    feedbacks?: boolean | UserCountOutputTypeCountFeedbacksArgs;
    shipments?: boolean | UserCountOutputTypeCountShipmentsArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
};
export type UserCountOutputTypeCountFeedbacksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeedbackWhereInput;
};
export type UserCountOutputTypeCountShipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentWhereInput;
};
export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    items?: boolean | Prisma.User$itemsArgs<ExtArgs>;
    feedbacks?: boolean | Prisma.User$feedbacksArgs<ExtArgs>;
    shipments?: boolean | Prisma.User$shipmentsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    items?: boolean | Prisma.User$itemsArgs<ExtArgs>;
    feedbacks?: boolean | Prisma.User$feedbacksArgs<ExtArgs>;
    shipments?: boolean | Prisma.User$shipmentsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs> | null;
        items: Prisma.$ItemPayload<ExtArgs>[];
        feedbacks: Prisma.$FeedbackPayload<ExtArgs>[];
        shipments: Prisma.$ShipmentPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.User$profileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$profileArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.User$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    feedbacks<T extends Prisma.User$feedbacksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    shipments<T extends Prisma.User$shipmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.User$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$profileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
export type User$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type User$feedbacksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeedbackSelect<ExtArgs> | null;
    omit?: Prisma.FeedbackOmit<ExtArgs> | null;
    include?: Prisma.FeedbackInclude<ExtArgs> | null;
    where?: Prisma.FeedbackWhereInput;
    orderBy?: Prisma.FeedbackOrderByWithRelationInput | Prisma.FeedbackOrderByWithRelationInput[];
    cursor?: Prisma.FeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeedbackScalarFieldEnum | Prisma.FeedbackScalarFieldEnum[];
};
export type User$shipmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShipmentSelect<ExtArgs> | null;
    omit?: Prisma.ShipmentOmit<ExtArgs> | null;
    include?: Prisma.ShipmentInclude<ExtArgs> | null;
    where?: Prisma.ShipmentWhereInput;
    orderBy?: Prisma.ShipmentOrderByWithRelationInput | Prisma.ShipmentOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentScalarFieldEnum | Prisma.ShipmentScalarFieldEnum[];
};
export type User$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
