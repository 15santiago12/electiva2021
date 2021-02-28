const express = require('express');
const router = express.Router();
const accesoriosControlador = require('../controladores/AccesoriosControler');

router.post('/agregar/',accesoriosControlador.AgregarAccesorio);
router.get('/listar', accesoriosControlador.ListaAccesorios);
router.put('/editar/:id', accesoriosControlador.EditarAccesorio);
router.delete('/eliminar/:id', accesoriosControlador.EliminarAccesorio);
router.get('/buscar/:id', accesoriosControlador.BuscarAccesorio);



module.exports = router; 