import express from 'express'
import {
  getBusinessById,
  updateBusiness,
  updatePartialBusiness,
  deleteBusiness,
  getAllBusinesses,
} from '../controllers/business.controller'

const businessRoutes = express.Router()

businessRoutes
  .get('/businesses/:id', getBusinessById)
  .get('/businesses', getAllBusinesses)
  .put('/businesses/:id', updateBusiness)
  .patch('/businesses/:id', updatePartialBusiness)
  .delete('/businesses/:id', deleteBusiness)

export default businessRoutes
