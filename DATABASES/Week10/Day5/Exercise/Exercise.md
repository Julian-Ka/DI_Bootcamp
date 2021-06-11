SELECT first_name AS "First Name", last_name AS "Last Name" 
FROM employees

SELECT DISTINCT department_id FROM departments

SELECT * FROM employees ORDER BY first_name DESC

SELECT first_name, last_name, salary, salary*0.15 AS PF FROM employees

SELECT first_name, last_name, salary FROM employees
ORDER BY salary ASC 

SELECT SUM (salary) FROM employees

SELECT MAX (salary), MIN (salary) FROM employees;

SELECT AVG (salary) FROM employees;

SELECT COUNT(employee_id) FROM employees

SELECT UPPER(first_name) FROM employees

SELECT LEFT(first_name, 3) AS ExtractString
FROM employees

SELECT first_name || ' ' || last_name AS full_name 
FROM employees

SELECT first_name FROM employees WHERE first_name LIKE '%[0-9]%'

SELECT * FROM employees ORDER BY first_name LIMIT 10;

SELECT first_name, last_name, salary FROM employees 
WHERE salary 
BETWEEN 10000 AND 15000 
ORDER BY salary ASC

SELECT first_name, last_name, EXTRACT(YEAR FROM hire_date)
FROM employees 
WHERE EXTRACT (YEAR FROM hire_date) = 1987

SELECT first_name FROM employees
WHERE first_name LIKE '%c%e%'



SELECT last_name FROM employees WHERE last_name LIKE '______';

SELECT last_name FROM employees WHERE last_name LIKE '__e%';

SELECT DISTINCT job_id  FROM employees;

SELECT * 
FROM employees 
WHERE last_name IN('Jones', 'Blake', 'Scott', 'King', 'Ford');



