import { pool } from '../config/Connection'
import { User } from './entities/User.entity'
import * as bcrypt from 'bcryptjs'

function getUsers() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT id, name, password FROM users;', (err, rows) => {
      if (rows === undefined) {
        reject(new Error('Rows is undefined'))
      } else {
        resolve(rows)
      }
    })
  })
}

function signupUser(user: User): Promise<User | string | number> {
  try {
    return new Promise((resolve) => {
      bcrypt.hash(user.password, 10).then((password) => {
        pool.query(
          `INSERT IGNORE INTO users (id, name, password) VALUES (DEFAULT, '${user.name}', '${password}');`,

          (err, rows) => {
            if (err) {
              return resolve(String(err))
            }
            return resolve(rows.affectedRows)
          }
        )
      })
    })
  } catch (e) {
    return e
  }
}

function deleteUser(id: number): {} {
  try {
    pool.query(`DELETE FROM users WHERE id = ${id};`)
    return {
      msg: `user with id ${id} has been deleted`
    }
  } catch (e) {
    return { error: e }
  }
}

export { getUsers, signupUser, deleteUser }
