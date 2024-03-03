export default async function handler(_req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const users = await response.json()
    res.status(200).json({ users })
  }