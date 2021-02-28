const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarGuarderia = async (req, res) => {
    try {
        const {nombreDueno, nombreMascota, fechaIngreso, cantidadDias, direccion, contacto} = req.body;
        const NuevaGuarderia = {nombreDueno, nombreMascota, fechaIngreso, cantidadDias, direccion, contacto};
        const Agrgar = await pool.query("INSERT INTO guarderia set ? ",[NuevaGuarderia]);
        res.status(200).json({NuevaGuarderia, msg:"Servicio de guarderia registrado con exito"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaGuarderia = async (req, res) =>{
    try {
        const servicios = await pool.query("SELECT * from guarderia");
        res.status(200).json({servicios});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarGuarderia = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombreDueno, nombreMascota, fechaIngreso, cantidadDias, direccion, contacto} = req.body;
        const Nuevo = {nombreDueno, nombreMascota, fechaIngreso, cantidadDias, direccion, contacto};
        const Editar = await pool.query('UPDATE guarderia SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El registro del servicio de guarderia ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarGuarderia = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM guarderia WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El registro del servicio de guarderia ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarGuarderia = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarGuarderia = await pool.query("SELECT * from guarderia WHERE id = ?", [id]);
        res.status(200).json({BuscarGuarderia});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
