const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
const adddept = require('./adddept')
const updateemp = require('./updateemp')
const addrole = require('./addrole')
const addemp = require('./addemp');
const db = require('./connection')

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
            db.query('SELECT employee_table.id, employee_table.first_name, employee_table.last_name, roles.title, roles.salary, department.name, mang.first_name as manager_name from employee_table left join roles on employee_table.role_id = roles.id left join department on roles.department_id = department.id left join employee_table as mang on employee_table.manager_id = mang.id;', (err, result)=> {
                if (err) {
                    console.log(err);
                }
                console.table(result)
                init()
            });
            break;
        case 'Add department':

            adddept(init);
            
            break;
        case 'Add a role':

            addrole(init);
            break;
        case 'Add an employee':

            addemp(init)
            break;
        case 'Update an employee':
            
            updateemp(init)
            break;
        }
    })
    .catch (err => console.log(err));
}
init();

