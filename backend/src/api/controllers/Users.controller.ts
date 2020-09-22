import { Request, Response } from 'express'
import { getUsers } from '../../services/Users.service'

export class UsersController {
  async index(req: Request, res: Response) {
    const users = await getUsers()
    console.log(users)
    return res.status(200).json({ users })
  }
}
