const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //password: 'contraseña',
    password: '',
    database: 'almacen'
  });
}