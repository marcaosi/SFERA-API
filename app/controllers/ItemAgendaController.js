const validate = require('../utils/validate')
const { ItemAgenda, sequelize } = require('../models')

async function index(req, res){
    const _id = req.params.id

    let found = []

    if(_id){
        const itemAgenda = await ItemAgenda.findOnde({
            where: {
                id: _id
            },
            include: 'agenda'
        })

        if(!itemAgenda){
            return res.status(203).json(null)
        }

        found = [
            itemAgenda    
        ]
    }else{
        found = await sequelize.query("select a.*, c.nome from ItemAgenda a inner join Agenda b on a.agenda_id = b.id inner join Aluno c on b.aluno_id = c.id")
        // found = await ItemAgenda.findAll({
        //     include: 'agenda'
        // })
    }

    res.json({
        count: found.length,
        data: found[0]
    })
}

async function create(req, res){
    try{
        const data = req.body

        validate(data, {
            tipo: "required|string",
            observacao: "required|string",
            agenda_id: "required|number",
            colaborador_id: "required|number"
        })

        const date = new Date()
        data.dataHora = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        const itemAgenda = await ItemAgenda.create(data)

        res.json(itemAgenda)
    }catch(err){
        console.log(err)
        res.status(400).json(err.message)
    }
}

async function update(req, res){
    const data = req.body

    validate(data, {
        dataHora: "required|string",
        tipo: "required|string",
        observacao: "required|string",
        agenda_id: "required|number",
        colaborador_id: "required|number",
        id: "number|required"
    })

    const itemAgenda = await ItemAgenda.findOne({
        where: {
            id: data.id
        }
    })

    if(!itemAgenda){
        return res.status(404).json()
    }

    itemAgenda.dataHora = data.dataHora
    itemAgenda.tipo = data.tipo
    itemAgenda.observacao = data.observacao
    itemAgenda.agenda_id = data.agenda_id
    itemAgenda.colaborador_matricula = data.colaborador_matricula


    itemAgenda.save()

    res.json(itemAgenda)
}

async function destroy(req, res){
    const itemAgenda = await ItemAgenda.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!itemAgenda){
        return res.status(404).json()
    }

    itemAgenda.destroy()

    res.status(203).send()
}

module.exports = {index, create, update, destroy}