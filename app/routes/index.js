  
const express = require('express')
const router = express.Router()
const setorRoutes = require('./setor')
const colaboradorRoutes = require('./colaborador')
const alunoRoutes = require('./aluno')

router.use('/setor', setorRoutes)
router.use('/colaborador', colaboradorRoutes)
router.use('/aluno', alunoRoutes)

module.exports = router