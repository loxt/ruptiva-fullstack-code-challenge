import express from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import UsersController from './api/controllers/Users.controller'
import CarsController from './api/controllers/Cars.controller'

const router = express.Router()

/////////////////////
//      Users      //
/////////////////////

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

router.delete(
  '/user/delete/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  UsersController.deleteUser
)

/////////////////////
//      Cars       //
/////////////////////

router.get('/cars', CarsController.index)

export default router
