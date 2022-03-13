const { contextBridge } = require("electron");
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "froofit_db",
});

connection.connect();
let sql = 'SELECT * FROM `user`';
connection.query(sql, function(error, results, fields) {
    if(error) console.log(error.code);
    else {
        console.log(results);
    }
})