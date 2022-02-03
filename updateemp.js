const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');
const db = require('./connection')

const questions = [
    {
        type: 'input',
        message:'What is the id of the employee you wish to update?',
        name:'emp_id'
    },
    {
        type: 'input',
        message:"Enter the id number of the chosen employee's new role",
        name:'role_id'
    }]

function updateemp(){
    inquirer
    .prompt(questions)
    .then(response=>{
        db.query(`UPDATE employee_table SET role_id = ${response.role_id} WHERE id = ${response.emp_id}`, (err, result)=>{
            if (err) {
                console.log(err);
            }
            else{
                db.query('SELECT * FROM employee_table', (err, result)=>{
                    if (err) {
                        console.log(err);
                    }
                    console.table(result);
                })
            }
        })
    })
}

module.exports = updateemp 