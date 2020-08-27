const validate = require('../utils/validate')
const { Ocorrencia } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const ocorrencia = await Ocorrencia.findOnde({
            where: {
                id: _id
            },
            include: ['aluno']
        })

        if(!ocorrencia){
            return res.status(203).json(null)
        }

        found = [
            ocorrencia    
        ]
    }else{
        found = await Ocorrencia.findAll({
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

        validate(data, {
            descricao: "required|string",
            colaborador_id: "required|number",
            aluno_id: "required|number"
        })

        const date = new Date()
        data.dataHora = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        const ocorrencia = await Ocorrencia.create(data)

        res.json(ocorrencia)
    }catch(err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

async function update(req, res){
    const data = req.body

    validate(data, {
        dataHora: "required|string",
        descricao: "required|string",
        colaborador_id: "required|string",
        aluno_id: "required|number",
        id: "number|required"
    })

    const ocorrencia = await Ocorrencia.findOne({
        where: {
            id: data.id
        }
    })

    if(!ocorrencia){
        return res.status(404).json()
    }

    ocorrencia.dataHora = data.dataHora
    ocorrencia.descricao = data.descricao
    ocorrencia.colaborador_id = data.colaborador_id
    ocorrencia.aluno_id = data.aluno_id


    ocorrencia.save()

    res.json(ocorrencia)
}

async function destroy(req, res){
    const ocorrencia = await Ocorrencia.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!ocorrencia){
        return res.status(404).json()
    }

    ocorrencia.destroy()

    res.status(203).send()
}

module.exports = {index, create, update, destroy}