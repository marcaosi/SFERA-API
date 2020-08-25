const validate = require('../utils/validate')
const { Funcao } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const funcao = await Funcao.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!funcao){
            return res.status(203).json(null)
        }

        found = [
            funcao
        ]
    }else{
        found = await Funcao.findAll()
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
            descricao: "string",
            status: "boolean",
            setor_id: "number|required",
            horarioTrabalho_id: "number|required"
        })

        const funcao = await Funcao.create(data)

        res.json(funcao)
    }catch(err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

async function update(req, res){

    validate(req.body, {
        nome: "string|required",
        descricao: "string",
        status: "boolean",
        setor_id: "number|required",
        horarioTrabalho_id: "number|required",
        id: "number|required"
    })
    const funcao = await Funcao.findOne({
        where: {
            id: req.body.id
        }
    })

    if(!funcao){
        return res.status(404).json(null)
    }

    funcao.nome = req.body.nome
    funcao.descricao = req.body.descricao
    funcao.status = req.body.status
    funcao.setor_id = req.body.setor_id

    funcao.save()

    res.status(200).json(funcao)
}

async function destroy(req, res){
    const funcao = await Funcao.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!funcao){
        return res.status(404).json(null)
    }

    funcao.destroy()

    res.status(203).json()
}

module.exports = {index, create, update, destroy}