const validate = require('../utils/validate')
const { Agenda } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const agenda = await Agenda.findOne({
            where: {
                id: req.params.id
            },
            include: ['aluno', 'sala']
        })

        if(!agenda){
            return res.status(203).json(null)
        }

        found = [
            agenda
        ]
    }else{
        found = await Agenda.findAll({
            include: ['aluno', 'sala']
        })
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
            sala_id: "number|required",
            aluno_id: "number|required"
        })

        const agenda = await Agenda.create(data)

        res.json(agenda)
    }catch(err){
        res.status(400).json(err.message)
    }
}

async function update(req, res){

    validate(req.body, {
        sala_id: "number|required",
        aluno_id: "number|required",
        id: "number|required"
    })
    const agenda = await Agenda.findOne({
        where: {
            id: req.body.id
        }
    })

    if(!agenda){
        return res.status(404).json(null)
    }

    agenda.aluno_id = req.body.aluno_id
    agenda.sala_id = req.body.sala_id

    agenda.save()

    res.status(200).json(agenda)
}

async function destroy(req, res){
    const agenda = await Agenda.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!agenda){
        return res.status(404).json(null)
    }

    agenda.destroy()

    res.status(203).json()
}

module.exports = {index, create, update, destroy}