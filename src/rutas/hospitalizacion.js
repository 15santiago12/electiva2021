const express = require('express');
const router = express.Router();
const hospitalizacionControlador = require('../controladores/HospitalizacionControler');

router.post('/agregar/',hospitalizacionControlador.AgregarHospitalizacion);
router.get('/listar', hospitalizacionControlador.ListaHospitalizacion);
router.put('/editar/:id', hospitalizacionControlador.EditarHospitalizacion);
router.delete('/eliminar/:id', hospitalizacionControlador.EliminarHospitalizacion);
router.get('/buscar/:nombreDueno', hospitalizacionControlador.BuscarHospitalizacion);



module.exports = router; 