STEP 1: Count how many actors are in the table.

SELECT COUNT (*) FROM actors


STEP 2: Try to add a new actor with some blank fields. What do you think the outcome will be?

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('John', 'Doe', '08/08/1988', )

Outcome: Syntax Error


INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('John', '', '08/08/1988', 7)

outcome: will be created