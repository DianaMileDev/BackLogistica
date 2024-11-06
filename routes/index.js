const express = require('express')
const respuesta = require('../src/util/respuesta')
const router = express.Router()
const controller = require('../src/modulos/usuario/controller')

router.post('/user/login',(req, res)=>{
    const {Usuario, Clave} = req.body;
    controller.login(Usuario, Clave).then(result => {
        if(result.length > 0){
            respuesta.success(req, res, 200, result);
        } else {
            respuesta.error(req, res, 401, 'Usuario o clave incorrectos');
        }
    })
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