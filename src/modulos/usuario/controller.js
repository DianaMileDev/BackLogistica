const db = require('../../DB/db');
const Entidad = 'usuario';

function getAll(){
    return db.getAll(Entidad);
}

module.exports = {
    getAll,
}