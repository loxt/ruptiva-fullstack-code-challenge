import { pool } from '../config/Connection'

function getCars() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM cars;', (err, rows) => {
      if (rows === undefined) {
        reject(new Error('Rows is undefined'))
      } else {
        resolve(rows)
      }
    })
  })
}

export { getCars }
