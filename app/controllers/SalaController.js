const validate = require('../utils/validate')
const { Sala } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const sala = await Sala.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!sala){
            return res.status(203).json(null)
        }

        found = [
            sala
        ]
    }else{
        found = await Sala.findAll()
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
            ano: "number|required",
            descricao: "string|required"
        })

        const sala = await Sala.create(data)

        res.json(sala)
    }catch(err){
        res.status(400).json(err.message)
    }
}

async function update(req, res){

    try{
        validate(req.body, {
            ano: "number|required",
            descricao: "string|required",
            id: "number|required"
        })
        const sala = await Sala.findOne({
            where: {
                id: req.body.id
            }
        })

        if(!sala){
            return res.status(404).json(null)
        }
    
        sala.descricao = req.body.descricao
        sala.ano = req.body.ano
        sala.save()
    
        res.status(200).json(sala)
    }catch(err){
        res.status(400).json(err.message)
    }
}

async function destroy(req, res){
    const sala = await Sala.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!sala){
        return res.status(404).json(null)
    }

    sala.destroy()

    res.status(203).json()
}

module.exports = {index, create, update, destroy}