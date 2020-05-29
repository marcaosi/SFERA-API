const express = require('express')
const router = express.Router()
const validate = require('../utils/validate')

const { Aluno } = require('../models')

router.get('/', async(req, res) => {
    const alunos = await Aluno.findAll()

    res.json(alunos)
})

router.get('/:id', async(req, res) => {
    const aluno = await Aluno.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json(aluno)
})

router.post('/', async(req, res) => {
    try{
        const data = req.body

        validate(data, {
            nome: "string|required",
            contato: "string|required",
            documento: "string|required",
            mae: "string|required",
            pai: "string|required",
            nascimento: "date|required"
        })

        const aluno = await Aluno.create(data)

        res.json(aluno)
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.put('/', async(req, res) => {
    const data = req.body

    validate(data, {
        nome: "string|required",
        contato: "string|required",
        documento: "string|required",
        mae: "string|required",
        pai: "string|required",
        nascimento: "date|required",
        id: "number|required"
    })

    const aluno = await Aluno.findOne({
        where: {
            id: data.id
        }
    })

    aluno.nome = data.nome

    aluno.save()

    res.json(aluno)
})

router.delete('/:id', async(req, res) => {
    const aluno = await Aluno.findOne({
        where: {
            id: req.params.id
        }
    })

    aluno.destroy()

    res.status(203).send()
})

module.exports = router