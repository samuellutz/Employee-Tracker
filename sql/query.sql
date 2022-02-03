SELECT e.id, e.first_name, e.last_name, r.id, r.salary, d.department
from (employee_db e join employee_table on roles = r.salary)
    join department d on 