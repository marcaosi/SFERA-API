const validate = require('../utils/validate')
const { Frequencia } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const frequencia = await Frequencia.findOnde({
            where: {
                id: _id
            },
            include: "aluno"
        })

        if(!frequencia){
            return res.status(203).json(null)
        }

        found = [
            frequencia    
        ]
    }else{
        found = await Frequencia.findAll({
            include: 'aluno'
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

        data.presenca = Boolean(data.presenca)

        validate(data, {
            aluno_id: "required|number",
            colaborador_id: "required|number",
            presenca: "required|boolean"
        })

        const date = new Date()
        data.dataHora = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        const frequencia = await Frequencia.create(data)

        res.json(frequencia)
    }catch(err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

async function update(req, res){
    const data = req.body

    validate(data, {
        aluno_id: "required|number",
        colaborador_id: "required|number",
        presenca: "required|boolean",
        dataHora: "required|string",
        id: "number|required"
    })

    const frequencia = await Frequencia.findOne({
        where: {
            id: data.id
        }
    })

    if(!frequencia){
        return res.status(404).json()
    }

    frequencia.aluno_id = data.aluno_id
    frequencia.colaborador_id = data.colaborador_id
    frequencia.presenca = data.presenca
    frequencia.dataHora = data.dataHora


    frequencia.save()

    res.json(frequencia)
}

async function destroy(req, res){
    const frequencia = await Frequencia.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!frequencia){
        return res.status(404).json()
    }

    frequencia.destroy()

    res.status(203).send()
}

module.exports = {index, create, update, destroy}