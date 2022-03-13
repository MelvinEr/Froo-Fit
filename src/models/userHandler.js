var dbmgr = require("./DBhandler");
var db = dbmgr.db;

exports.getNames = () => {
    const sql = "SELECT * FROM users";
    let statement = db.prepare(query);
    // get all objects from "users" table
    let res = statement.all();
    return res;
}