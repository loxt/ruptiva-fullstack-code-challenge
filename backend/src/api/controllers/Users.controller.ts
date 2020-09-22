import { Request, Response } from 'express'
import { getUsers, signupUser } from '../../services/Users.service'
import { User } from '../../services/entities/User.entity'

export default {
  async index(req: Request, res: Response) {
    const users = await getUsers()
    return res.status(200).json({ users })
  },

  async signUp(req: Request, res: Response) {
    const createdUser = await signupUser(req.body as User)

    if (createdUser === 0)
      return res.status(400).json({ error: 'User already exists' })

    return res.status(200).json({ createdUser })
  }
}
