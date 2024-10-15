import { User } from '../models'
import { TController } from '../types'

export const getAllUsers: TController = async (_req, res) => {
  try {
    const users = await User.find()
    return res.json(users).status(200)
  } catch (e) {
    return res.status(500).send({ message: 'Error al obtener los usuarios' })
  }
}

export const getUserById: TController = async (req, res) => {
  try {
    const user = await User.findOneBy({ id: Number(req.params.id) })
    if (!user) return res.status(404).send({ message: 'El usuario no existe' })
    return res.json(user).status(200)
  } catch (e) {
    return res.status(500).send({ message: 'Error al obtener el usuario' })
  }
}

export const createUser: TController = async (req, res) => {
  try {
    const { body } = req
    if (
      !body.name ||
      !body.lastName ||
      !body.age ||
      !body.photoUri ||
      !body.color
    ) {
      res.status(422).send({ message: 'Los datos no son validos' })
    }
    const user = new User()
    user.name = body.name
    user.lastName = body.lastName
    user.age = body.age
    user.photoUri = body.photoUri
    user.color = body.color
    const createdUser = await user.save()
    return res.status(201).send(createdUser)
  } catch (e) {
    return res.status(500).send({ message: 'Error al crear el usuario' })
  }
}

export const updateUserPut: TController = async (req, res) => {
  try {
    const { body } = req

    if (
      !body.name ||
      !body.lastName ||
      !body.age ||
      !body.photoUri ||
      !body.color
    ) {
      return res
        .status(422)
        .send({ message: 'El recurso a actualizar no esta completo!' })
    }

    const user = await User.findOneBy({ id: Number(req.params.id) })

    if (!user) {
      return res.status(404).send({
        error: 'Usuario no encontrado',
        message: 'El usuario con el ID especificado no existe en el servidor.',
      })
    } else {
      user.name = body.name
      user.lastName = body.lastName
      user.age = body.age
      user.photoUri = body.photoUri
      user.color = body.color
      const updatedUser = await user.save()
      return res.send(updatedUser).status(200)
    }
  } catch (e) {
    return res.status(500).send({ message: 'Error al actualizar el usuario' })
  }
}

export const updateUserPatch: TController = async (req, res) => {
  try {
    const { body } = req
    const user = await User.findOneBy({ id: Number(req.params.id) })
    if (!user) {
      return res.status(404).send({
        error: 'Usuario no encontrado',
        message: 'El usuario con el ID especificado no existe en el servidor.',
      })
    }

    user.name = body.name
    user.lastName = body.lastName
    user.age = body.age
    user.photoUri = body.photoUri
    user.color = body.color
    const updatedUser = await user.save()
    return res.send(updatedUser).status(200)
  } catch (e) {
    return res.status(500).send({ message: 'Error al actualizar el usuario' })
  }
}

export const deleteUserById: TController = async (req, res) => {
  try {
    const user = await User.findOneBy({ id: Number(req.params.id) })
    if (!user) {
      return res.status(404).send({
        error: 'Usuario no encontrado',
        message: 'El usuario con el ID especificado no existe en el servidor.',
      })
    } else {
      await user.remove()
      return res.status(200).send({
        message: 'Usuario eliminado exitosamente',
      })
    }
  } catch (e) {
    return res.status(500).send({ message: 'Error al eliminar el usuario' })
  }
}
