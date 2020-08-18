const express = require('express')
const router = express.Router()

const AlunoController = require("./controllers/AlunoController")
const ColaboradorController = require("./controllers/ColaboradorController")
const FuncaoController = require("./controllers/FuncaoController")
const SetorController = require("./controllers/SetorController")
const SalaController = require("./controllers/SalaController")
const AgendaController = require("./controllers/AgendaController")
const LoginController = require("./controllers/LoginController")
const HorarioTrabalhoController = require('./controllers/HorarioTrabalhoController')

router.post('/login', LoginController.create)

/**
 * Routes for Aluno
 */

router.get('/aluno', AlunoController.index)
router.get('/aluno/:id', AlunoController.index)
router.post('/aluno', AlunoController.create)
router.put('/aluno', AlunoController.update)
router.delete('/aluno/:id', AlunoController.destroy)

/**
 * Routes for Colaborador
 */

router.get('/colaborador', ColaboradorController.index)
router.get('/colaborador/:id', ColaboradorController.index)
router.post('/colaborador', ColaboradorController.create)
router.put('/colaborador', ColaboradorController.update)
router.delete('/colaborador/:id', ColaboradorController.destroy)

/**
 * Routes for Funcao
 */

router.get('/funcao', FuncaoController.index)
router.get('/funcao/:id', FuncaoController.index)
router.post('/funcao', FuncaoController.create)
router.put('/funcao', FuncaoController.update)
router.delete('/funcao/:id', FuncaoController.destroy)

/**
 * Routes for Setor
 */

router.get('/setor', SetorController.index)
router.get('/setor/:id', SetorController.index)
router.post('/setor', SetorController.create)
router.put('/setor', SetorController.update)
router.delete('/setor/:id', SetorController.destroy)

/**
 * Routes for Sala
 */

router.get('/sala', SalaController.index)
router.get('/sala/:id', SalaController.index)
router.post('/sala', SalaController.create)
router.put('/sala', SalaController.update)
router.delete('/sala/:id', SalaController.destroy)

/**
 * Routes for Agenda
 */

router.get('/agenda', AgendaController.index)
router.get('/agenda/:id', AgendaController.index)
router.post('/agenda', AgendaController.create)
router.put('/agenda', AgendaController.update)
router.delete('/agenda/:id', AgendaController.destroy)

/**
 * Routes for Horário de Trabalho
 */

router.get('/horarioTrabalho', HorarioTrabalhoController.index)
router.get('/horarioTrabalho/:id', HorarioTrabalhoController.index)
router.post('/horarioTrabalho', HorarioTrabalhoController.create)
router.put('/horarioTrabalho', HorarioTrabalhoController.update)
router.delete('/horarioTrabalho/:id', HorarioTrabalhoController.destroy)

module.exports = router