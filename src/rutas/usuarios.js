const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controladores/UsuarioControler');

router.post('/agregar/',usuarioControlador.AgregarUsuario);
router.get('/listar', usuarioControlador.ListaUsuarios);
router.put('/editar/:id', usuarioControlador.EditarUsuario);
router.delete('/eliminar/:id', usuarioControlador.EliminarUsuario);
router.get('/buscar/:cedula', usuarioControlador.BuscarUsuario);



module.exports = router; 