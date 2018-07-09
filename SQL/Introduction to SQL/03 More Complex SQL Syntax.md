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