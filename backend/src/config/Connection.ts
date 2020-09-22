import mysql from 'mysql'

// export const connection = mysql.createConnection(options)

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'ruptiva',
  connectionLimit: 10
})
