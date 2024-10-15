import { Business, User } from '../models'
import { TController } from '../types'

export const getAllBusinesses: TController = async (_req, res) => {
  try {
    const businesses = await Business.getAll()
    return res.send(businesses).status(200)
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .send({ message: 'Error al obtener los establecimientos' })
  }
}

export const getAllBusinessesByUserId: TController = async (req, res) => {
  try {
    const user = await User.findOne({
      relations: { businesses: true },
      where: { id: Number(req.params.userId) },
    })

    if (!user) {
      return res.status(404).send({ message: 'El usuario no existe' })
    }

    return res.send(user.businesses).status(200)
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .send({ message: 'Error al obtener los establecimientos' })
  }
}

export const getBusinessById: TController = async (req, res) => {
  try {
    const business = await Business.getById(Number(req.params.id))
    if (!business) {
      return res.status(404).send({ message: 'El negocio no existe' })
    }

    return res.send(business).status(200)
  } catch (e) {
    console.log(e)
    return res.status(500).send({ message: 'Error al obtener el negocio' })
  }
}

export const createBusinessForUser: TController = async (req, res) => {
  try {
    const { body } = req
    if (!body.ruc || !body.reasonSocial || !body.fullAddress) {
      return res.status(422).send({ message: 'Los datos no son validos' })
    }

    const user = await User.findOneBy({ id: Number(req.params.userId) })

    if (!user) {
      return res.status(404).send({ message: 'El usuario no existe' })
    }

    const business = new Business()
    business.user = user
    business.ruc = body.ruc
    business.reasonSocial = body.reasonSocial
    business.fullAddress = body.fullAddress
    const createdBusiness = await business.save()
    return res.status(201).send(createdBusiness)
  } catch (e) {
    console.log(e)
    return res.status(500).send({ message: 'Error al crear el negocio' })
  }
}

export const updateBusiness: TController = async (req, res) => {
  try {
    const business = await Business.findOneBy({ id: Number(req.params.id) })

    if (!business) {
      let errors: string[] = []
      if (!business) errors.push('El negocio no existe')
      return res.status(404).send({ message: 'Error al actualizar', errors })
    }

    const { body } = req
    if (!body.ruc || !body.reasonSocial || !body.fullAddress) {
      return res.status(422).send({ message: 'Los datos no son validos' })
    }

    business.ruc = body.ruc
    business.reasonSocial = body.reasonSocial
    business.fullAddress = body.fullAddress
    const updatedBusiness = await business.save()

    return res
      .send({ message: 'Negocio actualizado exitosamente', updatedBusiness })
      .status(201)
  } catch (e) {
    console.log(e)
    return res.status(500).send({ message: 'Error al actualizar el negocio' })
  }
}

export const updatePartialBusiness: TController = async (req, res) => {
  try {
    const business = await Business.findOneBy({ id: Number(req.params.id) })

    if (!business) {
      let errors: string[] = []
      if (!business) errors.push('El negocio no existe')
      return res.status(404).send({ message: 'Error al actualizar', errors })
    }

    const { body } = req
    business.ruc = body.ruc
    business.reasonSocial = body.reasonSocial
    business.fullAddress = body.fullAddress
    const updatedBusiness = await business.save()

    return res
      .send({ message: 'Negocio actualizado exitosamente', updatedBusiness })
      .status(201)
  } catch (e) {
    console.log(e)
    return res.status(500).send({ message: 'Error al actualizar el negocio' })
  }
}

export const deleteBusiness: TController = async (req, res) => {
  try {
    const business = await Business.findOneBy({ id: Number(req.params.id) })

    if (!business) {
      let errors: string[] = []
      if (!business) errors.push('El negocio no existe')
      return res.status(404).send({ message: 'Error al eliminar', errors })
    }

    await business.remove()
    return res.status(200).send({ message: 'Negocio eliminado exitosamente' })
  } catch (e) {
    console.log(e)
    return res.status(500).send({ message: 'Error al eliminar el negocio' })
  }
}
