import type { AccessArgs, FieldAccess } from 'payload'

import type { User } from '@/payload-types'

type isAdminType = (args: AccessArgs<User>) => boolean

// Collection-level access: for create, read, update, delete on collections
export const isAdmin: isAdminType = ({ req: { user } }) => {
    const u = user as User | null | undefined
    return Boolean(u?.role === 'admin' || u?.role === 'superadmin')
}

// Field-level access: for controlling access to specific fields
export const isAdminFieldLevel: FieldAccess<User> = ({ req: { user } }) => {
    const u = user as User | null | undefined
    return Boolean(u?.role === 'admin' || u?.role === 'superadmin')
}
