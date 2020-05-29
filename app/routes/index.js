  
const express = require('express')
const router = express.Router()
const setorRoutes = require('./setor')
const colaboradorRoutes = require('./colaborador')

router.use('/setor', setorRoutes)
router.use('/colaborador', colaboradorRoutes)

module.exports = router