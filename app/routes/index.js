  
const express = require('express')
const router = express.Router()
const setorRoutes = require('./setor')

router.use('/setor', setorRoutes)

module.exports = router