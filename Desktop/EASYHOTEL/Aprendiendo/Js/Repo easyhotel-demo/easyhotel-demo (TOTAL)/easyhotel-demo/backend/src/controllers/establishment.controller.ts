import { Business, Establishment } from '../models'
import { TController } from '../types'

export const getAllEstablishments: TController = async (_req, res) => {
  try {
    const establishment = await Establishment.getAll()
    res.send(establishment).status(200)
  } catch (e) {
    res.status(500).send({ message: 'Error al obtener los establecimientos' })
  }
}

export const getEstablishmentById: TController = async (req, res) => {
  try {
    const establishment = await Establishment.getById(Number(req.params.id))

    if (!establishment) {
      return res.status(404).send({ message: 'El establecimiento no existe' })
    }

    return res.send(establishment).status(200)
  } catch (e) {
    return res
      .status(500)
      .send({ message: 'Error al obtener el establecimiento' })
  }
}

export const getAllEstablishmentsByBusinessId: TController = async (
  req,
  res
) => {
  try {
    const business = await Business.findOne({
      where: { id: Number(req.params.businessId) },
      relations: { establishments: true },
    })

    if (!business) {
      return res.status(404).send({ message: 'El establecimiento no existe' })
    }

    return res.send(business.establishments).status(200)
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .send({ message: 'Error al obtener los establecimientos' })
  }
}

export const createEstablishmentForBusiness: TController = async (req, res) => {
  try {
    const business = await Business.findOneBy({
      id: Number(req.params.businessId),
    })

    if (!business) {
      return res.status(404).send({ message: 'El establecimiento no existe' })
    }

    const { body } = req
    if (!body.name || !body.address || !body.type || !body.photoUri) {
      return res.status(422).send({ message: 'Los datos no son validos' })
    }

    const establishment = new Establishment()
    establishment.name = body.name
    establishment.type = body.type
    establishment.address = body.address
    establishment.photoUri = body.photoUri
    establishment.business = business
    const createdEstablishment = await establishment.save()

    return res
      .send({
        message: 'Establecimiento creado exitosamente',
        createdEstablishment,
      })
      .status(201)
  } catch (e) {
    return res
      .status(500)
      .send({ message: 'Error al crear el establecimiento' })
  }
}

export const updateEstablishment: TController = async (req, res) => {
  try {
    const establishment = await Establishment.findOneBy({
      id: Number(req.params.id),
    })
    if (!establishment) {
      return res.status(404).send({ message: 'El establecimiento no existe' })
    }

    const { body } = req
    if (!body.name || !body.address || !body.type || !body.photoUri) {
      return res.status(422).send({ message: 'Los datos no son validos' })
    }

    establishment.name = body.name
    establishment.type = body.type
    establishment.address = body.address
    establishment.photoUri = body.photoUri
    const updatedEstablishment = await establishment.save()
    return res
      .send({
        message: 'Establecimiento actualizado exitosamente',
        updatedEstablishment,
      })
      .status(200)
  } catch (e) {
    return res
      .status(500)
      .send({ message: 'Error al actualizar el establecimiento' })
  }
}

export const updatePartialEstablishment: TController = async (req, res) => {
  try {
    const establishment = await Establishment.findOneBy({
      id: Number(req.params.id),
    })

    if (!establishment) {
      return res.status(404).send({ message: 'El establecimiento no existe' })
    }
    establishment.name = req.body.name
    establishment.type = req.body.type
    establishment.address = req.body.address
    establishment.photoUri = req.body.photoUri
    const updatedEstablishment = await establishment.save()

    return res
      .send({
        message: 'Establecimiento actualizado exitosamente',
        updatedEstablishment,
      })
      .status(200)
  } catch (e) {
    return res
      .status(500)
      .send({ message: 'Error al actualizar el establecimiento' })
  }
}

export const deleteEstablishment: TController = async (req, res) => {
  try {
    const establishment = await Establishment.findOneBy({
      id: Number(req.params.id),
    })
    if (!establishment) {
      return res.status(404).send({ message: 'El establecimiento no existe' })
    }
    await establishment.remove()
    return res
      .send({ message: 'Establecimiento eliminado exitosamente' })
      .status(200)
  } catch (e) {
    return res
      .status(500)
      .send({ message: 'Error al eliminar el establecimiento' })
  }
}
