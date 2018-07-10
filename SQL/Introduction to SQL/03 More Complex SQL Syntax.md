# SQL Syntax

A little more complex SQL syntax than basic clauses containing single SELECT, FROM and WHERE statements.

## Shaping Results with ORDER BY and GROUP BY

### ORDER BY

- Allows sorting of result set
- After the WHERE clause (if there is one)
- Specify one or more columns
- Separate columns by commas
- ASC (default) or DESC

#### Set Function

- Computes new values from  column values
- Use in place of columns in SELECT clause
- Passes column name to function
- Helps us to ask more interesting questions
- Often used with the DISTINCT qualifier

##### Function

- **COUNT**: Count of the coumn specified  (includes NULL values if * is used)
- **MAX**: Maximum value of the column (does not include NULL values)
- **MIN**: Minimum value of the column (does not inclued NULL values)
- **AVG**: Average of all values of the column (does not include NULL values, only numeric column)
- **SUM**: Sum of all the values of the column (does not include NULL values, only numeric column)

Example:

```sql
SELECT
SUM (p.contacted_number)
FROM person p;
```

#### Set Functions + Qualifiers

- Often used together
- Add inside of the function
- Run against DISTINCT column values

Example:

```sql
SELECT
COUNT(DISTINCT p.first_name)
FROM person p;
```

### GROUP BY

- Allows multiple columns with a set function
- Breaks result set into subsets
- Runs set function against each subset
- Result set returns 1 row per subset
- Subset is dictated by column in GROUP BY
- Column must appear in the SELECT LIST
- Appears after FROM and/or WHERE clauses

_Example:_ What is the count of every unique first name among my contacts?

```sql
SELECT
COUNT(p.first_name),
p.first_name
FROM person p
GROUP BY p.first_name;
```

### HAVING

- Works like WHERE works against SELECT

_Example:_ What is the count of unique first names among my contacts that appear at least 5 times?

```sql
SELECT
COUNT(DISTINCT p.first_name),
p.first_name
FROM person p
GROUP BY p.first_name
HAVING COUNT(DISTINCT p.first_name) >= 5;

--Can also be written like this:

SELECT
COUNT(DISTINCT p.first_name) as FirstNameCount,
p.first_name
FROM person p
GROUP BY p.first_name
HAVING FirstNameCount >= 5;

```