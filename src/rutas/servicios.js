const express = require('express');
const router = express.Router();
const serviciosControlador = require('../controladores/ServiciosControler');

router.post('/agregar/',serviciosControlador.AgregarServicio);
router.get('/listar', serviciosControlador.ListaServicios);
router.put('/editar/:id', serviciosControlador.EditarServicio);
router.delete('/eliminar/:id', serviciosControlador.EliminarServicio);
router.get('/buscar/:id', serviciosControlador.BuscarServicio);



module.exports = router; 