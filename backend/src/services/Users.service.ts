import connection from '../config/Connection'
import { User } from './entities/User.entity'
import * as bcrypt from 'bcryptjs'
function getUsers() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT id, name, password FROM users;', (err, rows) => {
      if (rows === undefined) {
        reject(new Error('Rows is undefined'))
      } else {
        resolve(rows)
      }
    })
  })
}

function signupUser(user: User): Promise<User | string | number> {
  return new Promise((resolve) => {
    bcrypt.hash(user.password, 10).then((password) => {
      connection.query(
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
}

export { getUsers, signupUser }
