const db = require('../../DB/db');
const Entidad = 'usuario';

function getAll(){
    return db.getAll(Entidad);
}

function getId(id){
    return db.getId(Entidad, id);
}

module.exports = {
    getAll,
    getId
}