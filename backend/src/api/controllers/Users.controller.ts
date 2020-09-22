// import { Request, Response } from 'express'
import { UsersService } from '../../services/Users.service'

export class UsersController {
  constructor(private usersService?: UsersService) {}

  async index() {
    return this.usersService.getUsers()
  }
}
