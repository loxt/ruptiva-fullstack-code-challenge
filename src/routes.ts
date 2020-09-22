import express from 'express'
import { CarsController } from './api/controllers/Cars.controller'

const router = express.Router()

router.get('/cars', new CarsController().index)

export default router
