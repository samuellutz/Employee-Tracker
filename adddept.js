const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table')
const db = require('./connection')

function adddept(){
    console.log('yay')
    inquirer.prompt({
        type: 'input',
        message: 'Enter name of new department',
        name: 'deptQ'
    })
    .then(response=>{
        db.query(`INSERT INTO department (name) VALUES ('${response.deptQ}')`, (err, result)=>{
            if (err) {
                console.log(err);
            }

            else{
                db.query('SELECT * FROM department;', (err, result)=> {
                    if (err) {
                        console.log(err);
                    }
                    console.table(result)
                });
            }
        })
    });
return}

    module.exports = adddept;