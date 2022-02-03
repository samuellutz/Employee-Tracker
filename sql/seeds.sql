INSERT into department (name)
    values ('logistics'),
            ('sales'),
            ('human resources');

insert into roles (title, salary, department_id)
    values ('project manager', 100000, 1),
            ('junior software Engineer', 70000, 1),
            ('senior software Engineer',90000, 1);


insert into employee_table (first_name, last_name, role_id, manager_id)
    values('Jack', 'Black',1, null),
    ('The', 'Dude',1, null),
    ('Some','Body',2, 1);