const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarMedicamento = async (req, res) => {
    try {
        const {nombre, precio, cantidad, marca, descripccion} = req.body;
        const NuevoMedicamento = {nombre, precio, cantidad, marca, descripccion};
        const Agregar = await pool.query("INSERT INTO medicamentos set ? ",[NuevoMedicamento]);
        res.status(200).json({NuevoMedicamento, msg:"Medicamento registrado con exito"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaMedicamentos = async (req, res) =>{
    try {
        const medicamentos = await pool.query("SELECT * from medicamentos");
        res.status(200).json({medicamentos});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarMedicamento = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, precio, cantidad, marca, descripccion} = req.body;
        const Nuevo = {nombre, precio, cantidad, marca, descripccion};
        const Editar = await pool.query('UPDATE medicamentos SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El medicamento ha sido actualizad0"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarMedicamento = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM medicamentos WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El medicamento ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarMedicamento = async (req, res) =>{
    try {
        const {id} = req.params;
        const BuscarMedicamento = await pool.query("SELECT * from medicamentos WHERE id = ?", [id]);
        res.status(200).json({BuscarMedicamento});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
