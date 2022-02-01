const mysql = require("mysql2");
const inquirer = require("inquirer");
const ctable = require("console.table");
const adddept = require('./adddept')
const addrole = require('./addrole')
const db = mysql.createConnection(
  {
      host: 'localhost',
      user:'root',
      password:'root',
      database:'employee_db'
  },
  console.log('Connected to the employee_db databse')
); 

const question = [
  {
    type:'list',
    message: 'Where would you like to begin',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add department', 'add a role', 'add an employee', 'update an employee'],
    name: 'choice'
  }
]

function init() {
  inquirer
  .prompt(question)
  .then(response => {
    switch (response.choice) {
        case 'View all departments':
            db.query('SELECT * FROM department;', (err, result)=> {
                if (err) {
                    console.log(err);
                }
                console.table(result)
            });
            break;
        case 'View all roles':
            db.query('SELECT * FROM roles;', (err, result)=> {
                if (err) {
                    console.log(err);
                }
                console.table(result)
            });
            break;
        case 'View all employees':
            db.query('SELECT * FROM employee;', (err, result)=> {
                if (err) {
                    console.log(err);
                }
                console.table(result)
            });
            break;
        case 'Add a department':

            addDept();
            break;
        }
    })
}
module.exports = init