const express = require('express')
const router = express.Router()

const AlunoController = require("./controllers/AlunoController")
const ColaboradorController = require("./controllers/ColaboradorController")
const FuncaoController = require("./controllers/FuncaoController")
const SetorController = require("./controllers/SetorController")

/**
 * Routes for Aluno
 */

router.get('/aluno', AlunoController.index)
router.get('/aluno/:id', AlunoController.index)
router.post('/aluno', AlunoController.create)
router.put('/aluno', AlunoController.update)
router.delete('/aluno', AlunoController.destroy)

/**
 * Routes for Colaborador
 */

router.get('/colaborador', ColaboradorController.index)
router.get('/colaborador/:id', ColaboradorController.index)
router.post('/colaborador', ColaboradorController.create)
router.put('/colaborador', ColaboradorController.update)
router.delete('/colaborador', ColaboradorController.destroy)

/**
 * Routes for Funcao
 */

router.get('/funcao', FuncaoController.index)
router.get('/funcao/:id', FuncaoController.index)
router.post('/funcao', FuncaoController.create)
router.put('/funcao', FuncaoController.update)
router.delete('/funcao', FuncaoController.destroy)

/**
 * Routes for Setor
 */

router.get('/setor', SetorController.index)
router.get('/setor/:id', SetorController.index)
router.post('/setor', SetorController.create)
router.put('/setor', SetorController.update)
router.delete('/setor', SetorController.destroy)