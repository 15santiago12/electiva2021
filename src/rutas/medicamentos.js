const express = require('express');
const router = express.Router();
const medicamentosControlador = require('../controladores/MedicamentosControler');

router.post('/agregar/',medicamentosControlador.AgregarMedicamento);
router.get('/listar', medicamentosControlador.ListaMedicamentos);
router.put('/editar/:id', medicamentosControlador.EditarMedicamento);
router.delete('/eliminar/:id', medicamentosControlador.EliminarMedicamento);
router.get('/buscar/:id', medicamentosControlador.BuscarMedicamento);



module.exports = router; 