export function isFirstUser(totalDocs: number): boolean {
    return totalDocs === 0
}

export function requiresSuperAdminRole(currentRole?: string): boolean {
    return currentRole !== 'admin' && currentRole !== 'superadmin'
}