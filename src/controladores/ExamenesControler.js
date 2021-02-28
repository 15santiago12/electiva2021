const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarExamen = async (req, res) => {
    try {
        const {tipoExamen, precio, descripccion, tiempoResultados, nombreEncargado, fechaToma} = req.body;
        const NuevoExamen = {tipoExamen, precio, descripccion, tiempoResultados, nombreEncargado, fechaToma};
        const Agrgar = await pool.query("INSERT INTO examenes set ? ",[NuevoExamen]);
        res.status(200).json({NuevoExamen, msg:"Examen registrado con exito"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaExamenes = async (req, res) =>{
    try {
        const examenes = await pool.query("SELECT * from examenes");
        res.status(200).json({examenes});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarExamen = async (req, res) => {
    try {
        const {id} = req.params;
        const {tipoExamen, precio, descripccion, tiempoResultados, nombreEncargado, fechaToma} = req.body;
        const Nuevo = {tipoExamen, precio, descripccion, tiempoResultados, nombreEncargado, fechaToma};
        const Editar = await pool.query('UPDATE examenes SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El examen ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarExamen = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM examenes WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El examen ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarExamen = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarExamen = await pool.query("SELECT * from examenes WHERE id = ?", [id]);
        res.status(200).json({BuscarExamen});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
