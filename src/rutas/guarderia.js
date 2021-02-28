const express = require('express');
const router = express.Router();
const guarderiaControlador = require('../controladores/GuarderiaControler');

router.post('/agregar/',guarderiaControlador.AgregarGuarderia);
router.get('/listar', guarderiaControlador.ListaGuarderia);
router.put('/editar/:id', guarderiaControlador.EditarGuarderia);
router.delete('/eliminar/:id', guarderiaControlador.EliminarGuarderia);
router.get('/buscar/:id', guarderiaControlador.BuscarGuarderia);



module.exports = router; 