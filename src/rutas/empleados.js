const express = require('express');
const router = express.Router();
const empleadosControlador = require('../controladores/EmpleadosControler');

router.post('/agregar/',empleadosControlador.AgregarEmpleado);
router.get('/listar', empleadosControlador.ListaEmpleados);
router.put('/editar/:id', empleadosControlador.EditarEmpleado);
router.delete('/eliminar/:id', empleadosControlador.EliminarEmpleado);
router.get('/buscar/:cedula', empleadosControlador.BuscarEmpleado);



module.exports = router; 