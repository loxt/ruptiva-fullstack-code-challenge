import express from 'express'
import { UsersController } from './api/controllers/Users.controller'

const router = express.Router()

router.get('/users', new UsersController().index)

export default router
