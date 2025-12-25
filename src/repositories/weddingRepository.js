import axios from 'axios'

export async function rAll() {
  try {
    const res = await axios.get('/api/items')
    return res.data
  } catch (err) {
    console.error('rAll error:', err)
    throw err
  }
}