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
      password: Joi.string()
        .required()
        .min(8)
        .max(150)
        .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z)(?=.*[a-z]).*$/, {
          name: 'too weak password'
        })
    })
  }),
  UsersController.signUp
)

export default router
