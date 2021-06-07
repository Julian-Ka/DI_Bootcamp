CREATE TABLE public.items (
	Model varchar(60),
	Price int
);
CREATE TABLE public.customers (
	first_name varchar(50),
	last_name varchar(50)
);

INSERT INTO items (model, price) VALUES ('Small Desk', '100');
INSERT INTO items (model, price) VALUES ('Large Desk', '300');
INSERT INTO items (model, price) VALUES ('Fan', '80');

INSERT INTO customers (first_name, last_name) VALUES ('Greg', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES ('Sandra', 'Jones');
INSERT INTO customers (first_name, last_name) VALUES ('Scott', 'Scott');
INSERT INTO customers (first_name, last_name) VALUES ('Trevor', 'Green');
INSERT INTO customers (first_name, last_name) VALUES ('Melanie', 'Johnson');

SELECT * FROM customers

SELECT * FROM items
WHERE price>=80;

SELECT * FROM items
WHERE price>80;

SELECT * FROM items
WHERE price<=300;

SELECT * FROM customers
WHERE last_name='Smith'

SELECT * FROM customers
WHERE last_name='Jones'

SELECT * FROM customers
WHERE first_name!='Scott'
