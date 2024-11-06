const db = require('../../DB/db');
const Entidad = 'usuario';

function getAll(){
    return db.getAll(Entidad);
}

function getId(id){
    return db.getId(Entidad, id);
}

function login(usu, con){
    return db.loginValidator(Entidad, usu, con);
}

module.exports = {
    getAll,
    getId,
    login
}