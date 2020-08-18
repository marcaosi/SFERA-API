const validate = require('../utils/validate')
const { HorarioTrabalho } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const horarioTrabalho = await HorarioTrabalho.findOnde({
            where: {
                id: _id
            }
        })

        if(!horarioTrabalho){
            return res.status(203).json(null)
        }

        found = [
            horarioTrabalho    
        ]
    }else{
        found = await HorarioTrabalho.findAll()
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
            entrada1: "required|string",
            entrada2: "required|string",
            saida1: "required|string",
            saida2: "required|string"
        })

        const horarioTrabalho = await HorarioTrabalho.create(data)

        res.json(horarioTrabalho)
    }catch(err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

async function update(req, res){
    const data = req.body

    validate(data, {
        entrada1: "required|string",
        entrada2: "required|string",
        saida1: "required|string",
        saida2: "required|string",
        id: "number|required"
    })

    const horarioTrabalho = await HorarioTrabalho.findOne({
        where: {
            id: data.id
        }
    })

    if(!horarioTrabalho){
        return res.status(404).json()
    }

    horarioTrabalho.entrada1 = data.entrada1
    horarioTrabalho.entrada2 = data.entrada2
    horarioTrabalho.saida1 = data.saida1
    horarioTrabalho.saida2 = data.saida2


    horarioTrabalho.save()

    res.json(horarioTrabalho)
}

async function destroy(req, res){
    const horarioTrabalho = await HorarioTrabalho.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!horarioTrabalho){
        return res.status(404).json()
    }

    horarioTrabalho.destroy()

    res.status(203).send()
}

module.exports = {index, create, update, destroy}