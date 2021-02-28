const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarHospitalizacion = async (req, res) => {
    try {
        const {nombreMascota, nombreDueno, diagnostico, examenes, medicamentos, direccion, contacto} = req.body;
        const NuevaHospitalizacion = {nombreMascota, nombreDueno, diagnostico, examenes, medicamentos, direccion, contacto};
        const Agrgar = await pool.query("INSERT INTO hospital set ? ",[NuevaHospitalizacion]);
        res.status(200).json({NuevaHospitalizacion, msg:"Servicio de hospitalizacion registrado con exito"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaHospitalizacion = async (req, res) =>{
    try {
        const servicios = await pool.query("SELECT * from hospital");
        res.status(200).json({servicios});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarHospitalizacion = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombreMascota, nombreDueno, diagnostico, examenes, medicamentos, direccion, contacto} = req.body;
        const Nuevo = {nombreMascota, nombreDueno, diagnostico, examenes, medicamentos, direccion, contacto};
        const Editar = await pool.query('UPDATE hospital SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El registro del servicio de hospitalizacion ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarHospitalizacion = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM hospital WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El registro del servicio de hospitalizacion ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarHospitalizacion = async (req, res) =>{
    try {
        const {nombreDueno} = req.params;
        const BuscarHospitalizacion = await pool.query("SELECT * from hospital WHERE nombreDueno = ?", [nombreDueno]);
        res.status(200).json({BuscarHospitalizacion});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
