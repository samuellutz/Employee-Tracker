drop database if exists employee_db;
create database employee_db;

use employee_db

create table department(
    id int not null auto_increment primary key,
    name varchar(30) not null
);

create table roles(
    id int not null auto_increment primary key,
    title varchar(30)not null,
    salary decimal(10,2) not null,
    department_id int,
    foreign key (department_id)
    references department(id)
    on delete set null
);

create table employee_table (
    id int not null auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    foreign key (role_id)
    references roles(id)
    on delete set null,
    manager_id int,
    foreign key ( manager_id)
    references employee_table (id)
    on delete set null
);
