const db = require('../../DB/db');
const Entidad = 'usuario';
const Entidad2 = 'registro';

function getAll(){
    return db.getAll(Entidad);
}

function getId(id){
    return db.getId(Entidad, id);
}

function login(usu, con){
    return db.loginValidator(Entidad, usu, con);
}

function register(Nombre, Correo, Contrasena, ConfirmarCont){
    console.log(Nombre, Correo, Contrasena, ConfirmarCont)
    return db.add(Entidad2, Nombre, Correo, Contrasena, ConfirmarCont);
}


module.exports = {
    getAll,
    getId,
    login,
    register
}