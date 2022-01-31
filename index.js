const mysql = require("mysql2");
const inquirer = require("inquirer");
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
      case'view all departments':

        break;
      case'view all roles':

        break;
      case'view all employees':

        break;
      case'add department':

        break;
      case'add a role':

        break;
      case'add an employee':

        break;
      case'update an employee':

        break;
    }
  })
}
init();