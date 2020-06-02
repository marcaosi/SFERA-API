const express = require('express')
const router = express.Router()
const validate = require('../utils/validate')

const { Funcao } = require('../models')

router.get('/', async (req, res) => {
    const funcoes = await Funcao.findAll()

    res.json(funcoes)
})

router.get('/:id', async (req, res) => {
    const funcao = await Funcao.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json(funcao)
})

router.post('/', async (req, res) => {
    try{
        const data = req.body

        validate(data, {
            nome: "string|required",
            descricao: "string",
            status: "boolean",
            setor_id: "number|required"
        })

        const funcao = await Funcao.create(data)

        res.json(funcao)
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.put('/', async (req, res) => {

    validate(req.body, {
        nome: "string|required",
        descricao: "string",
        status: "boolean",
        setor_id: "number|required",
        id: "number|required"
    })
    const funcao = await Funcao.findOne({
        where: {
            id: req.body.id
        }
    })

    funcao.nome = req.body.nome
    funcao.descricao = req.body.descricao
    funcao.status = req.body.status
    funcao.setor_id = req.body.setor_id

    funcao.save()

    res.status(200).json(funcao)
})

router.delte('/:id', async (req, res) => {
    const funcao = await Funcao.findOne({
        where: {
            id: req.params.id
        }
    })

    funcao.destroy()

    res.status(203).json()
})

module.exports = router