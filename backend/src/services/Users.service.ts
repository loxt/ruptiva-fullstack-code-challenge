import connection from '../config/Connection'
import { Response } from 'express'

export function getUsers(res: Response) {
  const test = connection.query('SELECT id, name FROM users', (err, rows) => {
    if (err) {
      res.status(500).json({ err })
      throw err
    }
    return res.status(200).json({ users: rows })
  })
}
