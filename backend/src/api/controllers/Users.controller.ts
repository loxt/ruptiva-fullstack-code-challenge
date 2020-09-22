import { Request, Response } from 'express'
import { getUsers } from '../../services/Users.service'

export class UsersController {
  async index(req: Request, res: Response) {
    return getUsers(res)
  }
}
