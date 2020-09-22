import { Request, Response } from 'express'
import { getCars, postCar } from '../../services/Cars.service'
import { Car } from '../../services/entities/Car.entity'

export default {
  async index(req: Request, res: Response) {
    const cars = await getCars()
    return res.status(200).json({ cars })
  },

  async post(req: Request, res: Response) {
    const createdCar = await postCar(req.body as Car)
    return res.status(200).json({ createdCar })
  }
}
