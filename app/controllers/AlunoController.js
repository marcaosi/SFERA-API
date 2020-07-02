const validate = require('../utils/validate')
const { Aluno } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    try{
        if(_id){
            console.log(Aluno)
            const aluno = await Aluno.findOne({
                where: {
                    id: _id
                }
            })
            
            if(!aluno){
                return res.status(203).json(null)
            }
            
            found = [
                aluno    
            ]
        }else{
            found = await Aluno.findAll()
        }
    
        res.json({
            count: found.length,
            data: found
        })
    }catch(err){
        console.log(err.message)
        res.status(500).send(err)
    }
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

    if(!aluno){
        return res.status(404).json()
    }

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

    if(!aluno){
        return res.status(404).json()
    }

    aluno.destroy()

    res.status(203).send()
}

module.exports = {index, create, update, destroy}