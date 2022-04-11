const res = require('express/lib/response');
const axios = require('axios');
const {Auto} = require('../models/model');
const {check, validationResult, body} = require('express-validator')


const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const verAuto = async (req, res) =>{
    const {id} = req.params
    const car = await Auto.findById(id);
    res.json({msg: 'Se ha seleccionado:', car})
}

const verAutos = async (req, res) =>{
    const cars = await Auto.find()
    res.json({cars})
}

const crearAuto = async (req, res)=>{
    const error = validationResult(req)
    if (error.isEmpty()){
        const car = new Auto(req.body);
        await car.save()
        res.json({car, message: 'Se ha creado'});
    } else {
        res.json(error)
    }
}

const varaxios = async (req, res)=>{
    const resultado = await axios.get("https://swapi.dev/api/",{ timeout: 10000 }).catch((err) => {
        err.origin = 'Error getting URL';
        throw err;
    });
    res.json(resultado.data)
}    

const editarAuto = async (req, res)=>{
    const {id} = req.params
    await Auto.findByIdAndUpdate(id,req.query);
    res.json({msg: 'Se han EDITADO los datos de:',id})
}

const borrarAuto = async (req, res)=>{
    const {id} = req.params
    await Auto.findByIdAndDelete(id);
    res.json({msg: 'El auto se ha eliminado'});
}

module.exports = {vistaUno, verAuto, verAutos, crearAuto, editarAuto, borrarAuto,varaxios}