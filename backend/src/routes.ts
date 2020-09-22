import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import UsersController from './api/controllers/Users.controller'

const router = express.Router()

router.get('/users', UsersController.index)

router.post(
  '/user/signup',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(4).max(150),
      password: Joi.string().required().min(8).max(150)
    })
  }),
  UsersController.signUp
)

export default router
