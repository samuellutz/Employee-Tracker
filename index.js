const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
const adddept = require('./adddept')
const addrole = require('./addrole')
mysql.createConnection(
  {
      host: 'localhost',
      user:'root',
      password:'password',
      database:'employee_db'
  },
)
.connection(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected!");
  
  });

const question = [
  {
    type:'list',
    message: 'Where would you like to begin',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add a role', 'Add an employee', 'Update an employee'],
    name: 'choice'
  }
];
// init function to make choices available
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

            adddept();
            break;
        case 'Add a role':

        addrole();
            break;
        case 'Add a employee':

            break;
        case 'Update an employee':

            break;
        }
    })
    .catch (err => console.log(err));
}
init();