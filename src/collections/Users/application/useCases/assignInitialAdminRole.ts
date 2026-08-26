import { isFirstUser, requiresSuperAdminRole } from '../../domain/rules/userRules'

export function assignInitialAdminRole<T extends { role?: string }>(
    userData: T,
    totalUsersInDatabase: number,
): T {
    if (!isFirstUser(totalUsersInDatabase)) {
        return userData
    }

    if (requiresSuperAdminRole(userData?.role)) {
        return {
            ...userData,
            role: 'superadmin',
        }
    }

    return userData
}