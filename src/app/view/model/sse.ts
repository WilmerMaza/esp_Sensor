export type SSE = responseSSE[]

export interface responseSSE {
  ID: string
  name: string
  value: string
  createdAt: string
  updatedAt: string
}
