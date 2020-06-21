const { Colaborador } = require("../models")
const {criptografar, KEY} = require("../utils/criptografia")


const jsonwebtoken = require("jsonwebtoken")

async function create(req, res){
    try{
        const { matricula, senha } = req.body

        const colaborador = await Colaborador.findOne({
            where: {
                matricula
            }
        })

        if(!colaborador) return res.status(404).json("Matrícula inexistente")

        const senhaCripto = criptografar(senha)

        if(colaborador.senha !== senhaCripto) return res.status(403).json()

        const token = jsonwebtoken.sign(JSON.stringify(colaborador), KEY, { algorithm: 'HS256' })

        return res.json(token)
    }catch(err){
        console.log(err)
        return res.status(500).json()
    }
}

module.exports = { create }