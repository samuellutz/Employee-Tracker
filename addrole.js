const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');
const question = [
    {
        type: 'input',
        message: 'eneter name of new role',
        name: 'name'
    },
    {
        type: 'input',
        message: 'eneter salary of new role',
        name: 'salary'
    },{
        type: 'input',
        message: 'eneter department id of new role',
        name: 'dept_id'
    }
];
const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'root',
        database:'employee_db'
    }
)

function addrole() {
    inquirer.prompt(question)
    .then(response => {
        db.query(`instert into roles (title, salary, department_id) values ('${response.name}','${response.salary}','${response.dept_id}')`, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                db.query(`select * from roles;`, (err, result)=>{
                    if (err) {
                        console.log(err);
                    }
                    console.table(result)
                })
            }
        })
    })
}

module.exports = addrole;