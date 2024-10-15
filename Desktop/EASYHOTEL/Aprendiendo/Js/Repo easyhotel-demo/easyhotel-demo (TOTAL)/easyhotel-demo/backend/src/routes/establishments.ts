import express from 'express'
import {
  deleteEstablishment,
  getAllEstablishments,
  getEstablishmentById,
  updateEstablishment,
  updatePartialEstablishment,
} from '../controllers/establishment.controller'

const establishmentRoutes = express.Router()

establishmentRoutes
  .get('/establishments', getAllEstablishments)
  .get('/establishments/:id', getEstablishmentById)
  .put('/establishments/:id', updateEstablishment)
  .patch('/establishments/:id', updatePartialEstablishment)
  .delete('/establishments/:id', deleteEstablishment)

export default establishmentRoutes
