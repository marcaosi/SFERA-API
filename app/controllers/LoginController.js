const { Colaborador } = require("../models")
const crypto = require("crypto")
const KEY = "#sfer@!"
const cipher = crypto.createCipher("aes256", KEY)

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

        cipher.update(senha)
        const senhaCripto = cipher.final("hex")

        if(colaborador !== senhaCripto) return res.status(403).json()

        const token = jsonwebtoken.sign(colaborador, KEY, { algorithm: 'HS256' })

        return res.json(token)
    }catch(err){
        console.log(err.message)
        return res.status(500).json()
    }
}

module.exports = { create }