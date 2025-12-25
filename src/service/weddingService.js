import { rAll } from '../repositories/weddingRepository'

export async function sAll() {
  const data = await rAll()
  // Optional transform/sort
  return data
}