import postgres from 'postgres'

let client: ReturnType<typeof postgres> | null = null

export function db() {
  const url = process.env.POSTGRES_URL
  if (!url) throw new Error('POSTGRES_URL is not configured')
  if (!client) {
    client = postgres(url, {
      max: 1,
      prepare: false,
      ssl: 'require',
      idle_timeout: 20,
      connect_timeout: 10,
    })
  }
  return client
}
