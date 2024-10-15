import express from 'express'
import {
  createBusinessForUser,
  getAllBusinessesByUserId,
} from '../controllers/business.controller'

const userBusinessRoutes = express.Router()

userBusinessRoutes
  .get('/users/:userId/businesses', getAllBusinessesByUserId)
  .post('/users/:userId/businesses', createBusinessForUser)

export default userBusinessRoutes
