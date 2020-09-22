import express from 'express'
import cors from 'cors'
import routes from './routes'
import { errors } from 'celebrate'

const server = express()

server.use(cors())

server.use(express.json())
server.use(routes)
server.use(errors())

server.listen(3000)
