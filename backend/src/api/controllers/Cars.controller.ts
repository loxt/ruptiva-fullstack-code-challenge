import { Request, Response } from 'express'
import { getCars } from '../../services/Cars.service'

export default {
  async index(req: Request, res: Response) {
    const cars = await getCars()
    return res.status(200).json({ cars })
  }
}
