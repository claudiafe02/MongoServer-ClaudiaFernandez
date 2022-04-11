const express = require('express');
const router = express.Router(); 
const {verAuto, verAutos, crearAuto, editarAuto, borrarAuto, varaxios} = require('../controller/controller.js');
const {check,validationResult,body}= require('express-validator');

/* GET users listing. */
router.get("/ver/:id", verAuto);
router.get("/ver", verAutos);
router.post("/crear",[
    check('placa').not().isEmpty().isLength({min: 6, max: 8}).isUppercase().withMessage("debe tener un número de placa"),
    check('marca').not().isEmpty().isLength({min: 3, max: 30}).isUppercase().withMessage("debe ingresar la marca del auto"),
    check('aniofabri').not().isEmpty().isLength({min: 4, max: 4}).withMessage("debe ingresar el año de fabricación con 4 dígitos"),
    check('fechaventa').isEmpty().withMessage("debe ingresar la fecha de venta con el formato: AAAA-MM-DD"),
] , crearAuto);
router.put("/editar/:id", editarAuto);
router.delete("/eliminar/:id", borrarAuto);
router.get("/veraxios",varaxios)
module.exports = router;
