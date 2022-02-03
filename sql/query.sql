SELECT employee_table.id, employee_table.first_name, employee_table.last_name, roles.title, roles.salary, department.name, mang.first_name as manager_name
from employee_table
left join roles on employee_table.role_id = roles.id
left join department on roles.department_id = department.id
left join employee_table as mang on employee_table.manager_id = mang.id;