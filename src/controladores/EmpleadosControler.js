const express = require('express');
const router = express.Router();
const pool = require('../database');

exports.AgregarEmpleado = async (req, res) => {
    try {
        const {nombre, apellido, cedula, contacto, direccion, cargo, tipoSangre, correo} = req.body;
        const NuevoEmpleado = {nombre, apellido, cedula, contacto, direccion, cargo, tipoSangre, correo};
        const Agrgar = await pool.query("INSERT INTO empleados set ? ",[NuevoEmpleado]);
        res.status(200).json({NuevoEmpleado, msg:"El empleado ha sido registrado con exito"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.ListaEmpleados = async (req, res) =>{
    try {
        const servicios = await pool.query("SELECT * from empleados");
        res.status(200).json({servicios});
    } catch  (err) {
        res.status(401).json({err: err});
    }
}

exports.EditarEmpleado = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, apellido, cedula, contacto, direccion, cargo, tipoSangre, correo} = req.body;
        const Nuevo = {nombre, apellido, cedula, contacto, direccion, cargo, tipoSangre, correo};
        const Editar = await pool.query('UPDATE empleados SET ? WHERE id= ?',[Nuevo, id]);
        res.status(200).json({Editar, msg: "El registro del empleado ha sido actualizado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.EliminarEmpleado = async (req, res) =>{
    try {
        const {id} = req.params;
        const eliminar = await pool.query("DELETE FROM empleados WHERE id = ?", [id]);
        res.status(200).json({eliminar, msg:"El registro del empleado ha sido eliminado"});
    } catch (err) {
        res.status(401).json({err: err});
    }
}

exports.BuscarEmpleado = async (req, res) =>{
    try {
        const {cedula} = req.params;
        const BuscarEmpleado = await pool.query("SELECT * from empleados WHERE cedula = ?", [cedula]);
        res.status(200).json({BuscarEmpleado});
    } catch (err) {
        res.status(401).json({err: err});
    }
}
