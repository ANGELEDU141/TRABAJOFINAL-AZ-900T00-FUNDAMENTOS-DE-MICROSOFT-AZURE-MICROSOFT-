import express from 'express'
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserPut,
  updateUserPatch,
} from '../controllers/user.controller'

const userRoutes = express.Router()

userRoutes
  .get('/users', getAllUsers)
  .get('/users/:id', getUserById)
  .post('/users', createUser)
  .patch('/users/:id', updateUserPatch)
  .put('/users/:id', updateUserPut)
  .delete('/users/:id', deleteUserById)

export default userRoutes
