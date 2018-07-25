# Introduction

## Database Technologies

**Database**: "a usually large collection of data organized especially for rapid search and retrieval (as by a computer)" -Merriam Webster

## The Relational Model

In a relational DB all data is stored in tables containing rows and columns. Other terms are commonly used:

- Table = relation
- Row = tuple
- Column = attribute

- **Columns** are always refered to by their name; therefore, each column name must be unique
- **Rows** are always refered to by a value; usually this value is the primary key.

### Relationships between elements are based on data values (primary key)

- NOT on storage order
- NOT with pointers to a physical location

### Codd's twelve rules

0. Foundation Rule
1. **Information Rule** - information can only be stored as values in a table
1. **Guaranteed Access Rule** - every value must be accessible using a combination of the table name, column name and primary key
1. **Systematic Treatment of Null Values** - defines how missing data should be handled
1. Dynamic On-line Catalog Based on the Relational Model
1. **Comprehensive Data Sublanguage Rule** - The DBMS must support a language for data and schema manipulation that can be used both programmatically and interactively (SQL is the language)
1. View Updating Rule
1. **High-level Insert, Update, and Delete** - The language must be able to I, U or D data in whole sets at a time
1. Physical Data Independence
1. Logical Data Independence
1. **Integrity Independence** - The DBMS _must_ support the ability to define rules governing data integrity as part of the schema
1. Distribution Independence
1. Nonsubversion Rule

### Data Modeling

The **Data Model** is the result of planning (data modeling) the database before it is created.

- How many table are needed
- What columns are in each table
- How do the tables relate

#### Conceptual data model

- All information in the organization that is available
- Pen and paper not necessarily computer

#### Logical data model

- For storing in computers
- For a specific database technology
- Implementation independent

#### Physical data model

- Optimized for specific vendor
- Based on logical model