const validate = require('../utils/validate')
const { Colaborador } = require('../models')
const {criptografar} = require("../utils/criptografia")

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const colaborador = await Colaborador.findOne({
            where: {
                id: _id
            }
        })

        if(!colaborador){
            return res.status(203).json(null)
        }

        found = [
            colaborador
        ]
    }else{
        found = await Colaborador.findAll()
    }

    res.json({
        count: found.length,
        data: found
    })
}

async function create(req, res){
    try{
        const data = req.body

        validate(data, {
            nome: "string|required",
            matricula: "number|required",
            documento: "string|required",
            nascimento: "date|required",
            senha: "string|required"
        })

        data.senha = criptografar(data.senha)

        const colaborador = await Colaborador.create(data)

        res.json(colaborador)
    }catch(err){
        res.status(400).json(err.message)
    }
}

async function update(req, res){
    const data = req.body

    validate(data, {
        nome: "string|required",
        matricula: "number|required",
        documento: "string|required",
        nascimento: "date|required",
        id: "number|required"
    })

    data.senha = criptografar(data.senha)

    const colaborador = await Colaborador.findOne({
        where: {
            id: data.id
        }
    })

    if(!colaborador){
        return res.status(404).json(null)
    }

    colaborador.nome = data.nome
    colaborador.save()
    res.json(colaborador)
}

async function destroy(req, res){
    const colaborador = await Colaborador.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!colaborador){
        return res.status(404).json(null)
    }

    colaborador.destroy()

    res.status(203).send()
}

module.exports = {index, create, update, destroy}