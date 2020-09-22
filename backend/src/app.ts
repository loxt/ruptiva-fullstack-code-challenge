import express from 'express'
import cors from 'cors'
import routes from './routes'
import connection from './config/Connection'

const server = express()

server.use(cors())
connection.connect()

server.use(express.json())
server.use(routes)

server.listen(3000)
