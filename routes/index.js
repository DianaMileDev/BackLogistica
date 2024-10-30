const express = require('express')
const respuesta = require('../src/util/respuesta')
const router = express.Router()
const controller = require('../src/modulos/usuario/controller')

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

router.get('/user/lista', (req, res) =>{
    const getAllUser = controller.getAll().then((items) => {
        respuesta.success(req, res, 200, items);
    })
})

router.get('/user/:id', (req, res) =>{
    const id = req.params.id;
    const getId = controller.getId(id).then((items) => {
        respuesta.success(req, res, 200, items);
    })
})

module.exports = router