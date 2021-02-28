const express = require('express');
const router = express.Router();
const vacunasControlador = require('../controladores/VacunasControler');

router.post('/agregar/',vacunasControlador.AgregarVacuna);
router.get('/listar', vacunasControlador.ListaVacunas);
router.put('/editar/:id', vacunasControlador.EditarVacuna);
router.delete('/eliminar/:id', vacunasControlador.EliminarVacuna);
router.get('/buscar/:id', vacunasControlador.BuscarVacuna);



module.exports = router; 