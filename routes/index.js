const express = require('express')
const respuesta = require('../src/util/respuesta')
const router = express.Router()

router.post('/user/login',(req, res)=>{
    if(req.body.user == 'dim@hotmail.com' && req.body.pass == '123'){
        respuesta.success(req, res)
    }
    respuesta.error(req, res)
})

router.post('/user/crear',(req,res)=>{
    respuesta.success(req, res, 200, 'Usuario Registrado')
})

router.post('/contacto',(req, res)=>{
    respuesta.success(req, res, 200, 'Solicitud enviada')
})

module.exports = router