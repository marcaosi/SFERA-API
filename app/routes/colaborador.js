const express = require('express')
const router = express.Router()
const validate = require('../utils/validate')

const { Colaborador } = require('../models')

router.get('/', async(req, res) => {
    const colaboradores = await Colaborador.findAll()

    res.json(colaboradores)
})

router.get('/:id', async(req, res) => {
    const colaborador = await Colaborador.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json(colaborador)
})

router.post('/', async(req, res) => {
    try{
        const data = req.body

        validate(data, {
            nome: "string|required",
            matricula: "number|required",
            documento: "string|required",
            nascimento: "date|required"
        })

        const colaborador = await Colaborador.create(data)

        res.json(colaborador)
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.put('/', async(req, res) => {
    const data = req.body

    validate(data, {
        nome: "string|required",
        matricula: "number|required",
        documento: "string|required",
        nascimento: "date|required",
        id: "number|required"
    })

    const colaborador = await Colaborador.findOne({
        where: {
            id: data.id
        }
    })

    colaborador.nome = data.nome

    colaborador.save()

    res.json(colaborador)
})

router.delete('/:id', async(req, res) => {
    const colaborador = await Colaborador.findOne({
        where: {
            id: req.params.id
        }
    })

    colaborador.destroy()

    res.status(203).send()
})

module.exports = router