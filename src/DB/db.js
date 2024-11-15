const mysql = require('mysql')
const config = require('../config');
const { query } = require('express');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conn;
let reintentos = 0;
const maxintentos = 3;

function conDB(){
    conn = mysql.createConnection(dbConfig);

    conn.connect((error) => {
        if(error){
            reintentos ++;
            console.log(`Error de conexion a la Base de Datos: ${error}`);
            if(reintentos >= maxintentos)
                process.exit(1);
            setTimeout(conDB, 200);
        }
        else{
            console.log('Conexion a la base de datos exitosa');
        }
    });
}

conDB();

function getAll(entidad){
    return new Promise((resolve,reject)=> {
        conn.query(`SELECT * FROM ${entidad}`,(error,result)=>{
            if(error)
                return reject(error);

            return resolve(result);
        })
    });
}

function getId(entidad, id){
    return new Promise((resolve,reject)=> {
        conn.query(`SELECT * FROM ${entidad} WHERE Id = ${id}`,(error,result)=>{
            if(error)
                return reject(error);

            return resolve(result);
        })
    });
}

function loginValidator(entidad, usu, cont){
    return new Promise((resolve,reject)=> {
        conn.query(`SELECT * FROM ${entidad} WHERE Usuario = '${usu}' AND Clave = '${cont}';`,(error,result)=>{
            if(error)
                return reject(error);

            return resolve(result);
        })
    });
}

function add(entidad, Nombre, Correo, Contrasena, ConfirmarCont){
    return new Promise((resolve,reject) => {
        conn.query(`INSERT INTO ${entidad} (Nombre, Correo, Contrasena, ConfirmarCont) VALUES ('${Nombre}', '${Correo}', '${Contrasena}', '${ConfirmarCont}');`,(error, result) =>{
            if (error)
                return reject(error);
            return resolve(result);        
        })
        console.log(`INSERT INTO ${entidad} (Nombre, Correo, Contrasena, ConfirmarCont) VALUES ('${Nombre}', '${Correo}', '${Contrasena}', '${ConfirmarCont}');`)
    })
}

function update(entidad, datos){

}

function state(entidad, id, estado){

}

module.exports = {
    getAll,
    getId,
    add,
    update,
    state,
    loginValidator
}

