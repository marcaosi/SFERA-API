const validate = require('../utils/validate')
const { Setor } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const setor = await Setor.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!setor){
            return res.status(203).json(null)
        }

        found = [
            setor
        ]
    }else{
        found = await Setor.findAll()
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
            nome: "string|required"
        })

        const setor = await Setor.create(data)

        res.json(setor)
    }catch(err){
        res.status(400).json(err.message)
    }
}

async function update(req, res){
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

    if(!setor){
        return res.status(404).json(null)
    }

    setor.nome = data.nome

    setor.save()

    res.json(setor)
}

async function destroy(req, res){
    const setor = await Setor.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!setor){
        return res.status(404).json(null)
    }

    setor.destroy()

    res.status(203).send()
}

module.exports = {index, create, update, destroy}