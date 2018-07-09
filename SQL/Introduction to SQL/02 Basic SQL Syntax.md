# Understanding Basic SQL Syntax

## Introduction

_A **SQL Statement** is an expression that tells a database what you want it to do_

- It is important to have a ";" at the end of every valid SQL statement
- SELECT first_name FROM person;
  - SELECT and FROM are **keywords**
  - first_name and person are **identifiers**
  - SELECT first_name is a **select clause**
  - FROM person is a **from clause**

### SELECT

- Retrieves one or more rows from one or more tables
- The SELECT statement is a question being asked for the DB
- The following statement returns the string Hello World which is not in a DB.  It can be useful to return strings not found in a DB when returning data.

```sql
SELECT 'Hello',' World';
```

#### The SELECT List

- Most of the time it contains a list of columns from a table you want to query.
- In this cause, a **FROM** clause is required to indicate which table
- After every column comes a comma
- Except: no comma after the last column

```sql
SELECT first_name, last_name FROM person;
```

#### FROM Clause

- Defines the table you want to query
- It is good practice to _qualify_ each column name

```sql
SELECT person.first_name, person.last_name FROM person;
```

##### Aliasing the Table Name

- This is a Best Practice

Example 1:

```sql
SELECT p.first_name, p.last_name FROM person p;
```

Example 2:

```sql
SELECT 'Hello' as FirstWord, 'World' as SecondWord;
-- This will put Hello in the Firstword column and World in the SecondWord column
```

##### Constraining

- **DISTINCT** `SELECT DISTINCT p.first_name FROM person p;` returns only the unique first names in the table.  Any duplicates are returned only once.
- Not DISTINCT `SELECT p.first_name FROM person p;` returns all the first names in the table even if they are duplicates

#### WHERE

- Constrains the result set
- Comes after the FROM clause
- Contains boolean expressions
- Only matching rows are in the result set

```sql
SELECT p.last_name
FROM person p
WHERE p.first_name = 'Jon';
```

#### AND

- Combines two expressions
- If both are TRUE, row is included
- If either is FALSE, row is excluded

```sql
SELECT p.last_name
FROM person p
WHERE p.first_name = 'Jon';
AND p.birthdate > '12/31/1965';
```

#### OR

- Combines two expressions
- If either is TRUE, row is included
- If both are FALSE, row is excluded

```sql
SELECT p.last_name
FROM person p
WHERE p.first_name = 'Jon';
OR p.last_name = 'Flanders';
```

#### BETWEEN

- Acts on column and two values
- TRUE if column value is between two values
- Inclusive - includes two values (like >= & <=))

#### LIKE

- A more fuzzy version of =
- String with special characters inside `LIKE 'J%`;
- If the match is true, the row is returned

#### IN

- Like a multi-value = operator
- List of potential values
- True if any of the values in the list "hit"

```sql
SELECT p.last_name
FROM person p
WHERE p.first_name
IN ('Jon', 'Fritz');
```

#### IS

- Special operator
- Like an equals operator
- Just for values that might be **NULL**
- **IS** is always accompanied by **NULL**

Example:

```sql
SELECT p.first_name,
p.last_name
FROM person p
WHERE p.last_name
IS NULL;
```

#### IS NOT

- **IS NOT** is the correlary for **IS**
- Also must be paired with **NULL**

Example:

```sql
SELECT p.first_name,
p.last_name
FROM person p
WHERE p.last_name
IS NOT NULL;
```

### INSERT

- Adds one or more rows into a table
  - Example: INSERT INTO contacts (first_name, last_name) VALUES ('Fritz','Onion');

### UPDATE

- Modifies one or more rows in a table
  - Example: UPDATE contacts SET last_name='Ahern' WHERE id = 1;

### DELETE

- Removes one or more rows from one table
  - Example: DELETE FROM contacts WHERE id = 2;