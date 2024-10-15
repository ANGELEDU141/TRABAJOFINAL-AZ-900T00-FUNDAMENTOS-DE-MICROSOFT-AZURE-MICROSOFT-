import express from 'express'
import {
  createEstablishmentForBusiness,
  getAllEstablishmentsByBusinessId,
} from '../controllers/establishment.controller'

const businessEstablishmentRoutes = express.Router()

businessEstablishmentRoutes
  .get(
    '/businesses/:businessId/establishments',
    getAllEstablishmentsByBusinessId
  )
  .post(
    '/businesses/:businessId/establishments/:id',
    createEstablishmentForBusiness
  )

export default businessEstablishmentRoutes
