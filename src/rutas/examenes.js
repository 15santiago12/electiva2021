const express = require('express');
const router = express.Router();
const examenesControlador = require('../controladores/ExamenesControler');

router.post('/agregar/',examenesControlador.AgregarExamen);
router.get('/listar', examenesControlador.ListaExamenes);
router.put('/editar/:id', examenesControlador.EditarExamen);
router.delete('/eliminar/:id', examenesControlador.EliminarExamen);
router.get('/buscar/:id', examenesControlador.BuscarExamen);



module.exports = router; 