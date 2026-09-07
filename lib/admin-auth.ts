export const ADMIN_SESSION_KEY = 'booth_admin_session'

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || 'change-this-password'
}
