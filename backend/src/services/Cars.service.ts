import { pool } from '../config/Connection'
import { Car } from './entities/Car.entity'

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

function postCar(car: Car): Promise<Car | string | number> {
  try {
    return new Promise((resolve) => {
      pool.query(
        `INSERT INTO cars
            (id, name, hp, manufacturer, price, image)
            VALUES (DEFAULT, '${car.name}', '${car.hp}', '${car.manufacturer}', '${car.price}', '${car.image}');`,
        (err, rows) => {
          if (err) {
            return resolve(String(err))
          }
          return resolve(rows.affectedRows)
        }
      )
    })
  } catch (e) {
    return e
  }
}

export { getCars, postCar }
