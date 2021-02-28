const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarMascota = async (req, res) => {
    try {
        const {nombre, raza, edad, tipo, nombreDueno, apellidoDueno, cedula, contacto, direccion, correo} = req.body;
        const NuevaMascota = {nombre, raza, edad, tipo, nombreDueno, apellidoDueno, cedula, contacto, direccion, correo};
        const Agregar = await pool.query("INSERT INTO mascotas set ? ",[NuevaMascota]);
        res.status(200).json({NuevaMascota, msg:"Mascota agregada con exito"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaMascotas = async (req, res) =>{
    try {
        const mascota = await pool.query("SELECT * from mascotas");
        res.status(200).json({mascota});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarMascota = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, raza, edad, tipo, nombreDueno, apellidoDueno, cedula, contacto, direccion, correo} = req.body;
        const Nuevo = {nombre, raza, edad, tipo, nombreDueno, apellidoDueno, cedula, contacto, direccion, correo};
        const Editar = await pool.query('UPDATE mascotas SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "La Mascota ha sido actualizada"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarMascota = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM mascotas WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"La mascota ha sido eliminada"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarMascota = async (req, res) =>{
    try {
        const {cedula} = req.params;
        const BuscarMascota = await pool.query("SELECT * from mascotas WHERE cedula = ?", [cedula]);
        res.status(200).json({BuscarMascota});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
