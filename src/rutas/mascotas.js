const express = require('express');
const router = express.Router();
const mascotaControlador = require('../controladores/MascotaControler');

router.post('/agregar/',mascotaControlador.AgregarMascota);
router.get('/listar', mascotaControlador.ListaMascotas);
router.put('/editar/:id', mascotaControlador.EditarMascota);
router.delete('/eliminar/:id', mascotaControlador.EliminarMascota);
router.get('/buscar/:cedula', mascotaControlador.BuscarMascota);



module.exports = router; 