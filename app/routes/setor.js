const express = require('express')
const router = express.Router()
const validate = require('../utils/validate')

const { Setor } = require('../models')

router.get('/', async(req, res) => {
    const setores = await Setor.findAll()

    res.json(setores)
})

router.get('/:id', async(req, res) => {
    const setor = await Setor.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json(setor)
})

router.post('/', async(req, res) => {
    try{
        const data = req.body

        validate(data, {
            nome: "string|required"
        })

        const setor = await Setor.create(data)

        res.json(setor)
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.put('/', async(req, res) => {
    const data = req.body

    validate(data, {
        nome: "string|required",
        id: "number|required"
    })

    const setor = await Setor.findOne({
        where: {
            id: data.id
        }
    })

    setor.nome = data.nome

    setor.save()

    res.json(setor)
})

router.delete('/:id', async(req, res) => {
    const setor = await Setor.findOne({
        where: {
            id: req.params.id
        }
    })

    setor.destroy()

    res.status(203).send()
})

module.exports = router