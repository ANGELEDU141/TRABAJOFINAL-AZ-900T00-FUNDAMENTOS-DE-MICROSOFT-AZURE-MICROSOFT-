import 'dotenv/config'
import 'reflect-metadata'

import express from 'express'
import cors from 'cors'
import { AppDataSource } from './database/data-source'
import morgan from 'morgan'

import userRoutes from './routes/users'
import userBusinessRoutes from './routes/users.business'
import businessRoutes from './routes/business'
import establishmentRoutes from './routes/establishments'
import businessEstablishmentRoutes from './routes/business.establishment'

const PORT = process.env.PORT || 3001

async function Main() {
  const app = express()

  AppDataSource.initialize()
    .then(() => console.log('Data Source has been initialized!'))
    .catch((err) =>
      console.error('Error during Data Source initialization:', err)
    )

  app.use(morgan('dev'))
  app.use(cors())
  app.use(express.json())

  // versions api
  app.use('/api/v1', userRoutes)
  app.use('/api/v1', businessRoutes)
  app.use('/api/v1', userBusinessRoutes)
  app.use('/api/v1', establishmentRoutes)
  app.use('/api/v1', businessEstablishmentRoutes)

  app.listen(PORT, () => console.log(`current in port ${PORT}`))
}

Main()
