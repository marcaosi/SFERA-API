const validate = require('../utils/validate')
const { Aluno } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        found = [
            await Aluno.findOnde({
                where: {
                    id: _id
                }
            })
        ]
    }else{
        found = await Aluno.findAll()
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
}

async function update(req, res){
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
}

async function destroy(req, res){
    const aluno = await Aluno.findOne({
        where: {
            id: req.params.id
        }
    })

    aluno.destroy()

    res.status(203).send()
}

module.exports = {index, create, update, destroy}