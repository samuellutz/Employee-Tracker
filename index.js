const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
const adddept = require('./adddept')
const updateemp = require('./updateemp')
const addrole = require('./addrole')
const addemp = require('./addemp');


// connection to the mysql
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
// question selector
const question = [
  {
    type:'list',
    message: 'Where would you like to begin',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add a role', 'Add an employee', 'Update an employee'],
    name: 'choice'
  }
];
// init function to make choices available to go to.
function init() {
  inquirer
  .prompt(question)
  .then(response => {
    switch (response.choice) {
        case 'View all departments':
            db.query('SELECT * FROM department', (err, result)=> {
                if (err) {
                    console.log(err);
                }
                console.table(result)
                init()
            });
            break;
        case 'View all roles':
            db.query('SELECT * FROM roles', (err, result)=> {
                if (err) {
                    console.log(err);
                }
                console.table(result)
                init()
            });
            break;
        case 'View all employees':
            db.query('SELECT * FROM employee_table;', (err, result)=> {
                if (err) {
                    console.log(err);
                }
                console.table(result)
                init()
            });
            break;
        case 'Add department':

            adddept();
            break;
        case 'Add a role':

            addrole();
            break;
        case 'Add an employee':

            addemp()
            break;
        case 'Update an employee':
            
            updateemp()
            break;
        }
    })
    .catch (err => console.log(err));
}
init();