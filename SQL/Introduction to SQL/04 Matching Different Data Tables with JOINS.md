# Matching Different Data Tables with JOINS

## The JOIN Clause

- Merges multiple tables into one result set
- FROM clause includes all tables
- Separates each table with a comma
- WHERE clause typically included
- Expression with columns from each table
- There are different types of JOINS

### CROSS JOIN

- Simplest JOIN
- Returns all rows from both tables
- No WHERE clause
- Least useful
- Inefficient
- Creates a Cartesian Product
- CROSS keyword implied

_Example:_ What are all the first names and email addresses I have?

```sql
SELECT p.first_name, e.email_address
FROM
person p,
email_address e;
```

This is **BAD PRACTICE** don't use this kind of query!! Use one of the other type of JOINs instead.

### INNER JOIN

- Most typical JOIN
- Emphasizes relational nature of database
- Matches column in first table to second
- Primary key to foreign key is most common
  - Primary key is the key in the first table; Foreign key is the key in the second table

_Example:_ What are all my contacts email addresses?

```sql
SELECT
p.first_name, p.last_name,
e.email_address
FROM person p
INNER JOIN
email_address e
ON
p.person_id = e.email_address_person_id;
```

### OUTER JOINs

- INNER JOIN doesn't deal with NULL values
- OUTER JOIN works even when no match
- NULL columns if no match in second table
- FULL OUTER JOIN returns all joined rows
- NULL when no match in either table

#### LEFT OUTER JOIN

- Another NULL-related JOIN
- All rows from the left side will be returned
- NULL for non-matching right side table

_Example:_ What are my contacts and their email addresses, including those I don't have an email for?

```sql
select
p.first_name, p.last_name,
e.email_address
from person p
left outer join
email _address e
on p.person_id = e.email_address_person_id;
```

#### RIGHT OUTER JOIN

- Opposite of LEFT OUTER JOIN
- All rows from the right side will be returned
- NULL for non-matching left side table

_Example:_ What are the email addresses I have, including those emails I don't have a person for?

```sql
select
p.first_name, p.last_name,
e.email_address
from person p
right outer join
email _address e
on p.person_id = e.email_address_person_id;
```

#### FULL OUTER JOIN

_Example:_ What are all my contacts and their email addresses, including the ones missing an email address and the ones with an email address but missing a contact name?

```sql
select
p.first_name, p.last_name,
e.email_address
from person p
full outer join
email _address e
on p.person_id = e.email_address_person_id;
```

### SELF JOIN

- You can JOIN a table on itself
- Odd but sometimes useful
- No special syntax
- Same  table on left and right side of JOIN
- Useful when table contains hierarchical data