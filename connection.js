const mysql = require("mysql2");
const inquirer = require("inquirer");



const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'password',
        database:'employee_db'
    },
  )
  db.connect(function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Connected!");
    
    });

    module.exports = db;