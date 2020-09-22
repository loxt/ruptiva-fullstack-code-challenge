import connection from '../config/Connection'

export class UsersService {
  async getUsers() {
    connection.query('SELECT * FROM users', (err, rows, fields) => {
      if (err) throw err
      console.log('The solution is: ', rows[0].solution)
      console.log('The fields is: ', fields)
    })
  }
}
