import connection from '../config/Connection'

function getUsers() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT id, name, password FROM users', (err, rows) => {
      if (rows === undefined) {
        reject(new Error('Rows is undefined'))
      } else {
        resolve(rows)
      }
    })
  })
}
export { getUsers }
