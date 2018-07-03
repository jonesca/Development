# Introduction to SQL

## SQL

- **S**tructured **Q**uery **L**anguage is a special-purpose programming language
- SQL's purpose is to manipulate sets of data
  - Typically from a relational database
  - ANSI and ISO standards

## Database

- A database is...
  - A container to help organize data
  - A way to efficiently store and retrieve data

### Relational

- A way to describe data and the relationships between data entities
- Data stored in a table
  - Each table has a name
  - Each column in the table has a name
  - Each column has restrictions (size, type, format)
  - Columns can be required / not required

**Query**ing is simply the act of asking questions of the DB and getting back the answers to those questions.  The DB must be setup to enable questions...

*_Generally speaking, if you see columns in a table with numbers (ie: email1, email2, email3) that is not  good DB design_*

##### Person Contact

- First Name
- Last Name
- Email1
- Email2

#### A Better Solution - Normalization

##### Person table

- Key
- First Name
- Last Name

##### Email table
- Key
- Person Key
- Email

**Database design is important**, it controls the questions you can ask later

**SQL** is the language used to ask the questions

**SQL** is a powerful declarative language that you can grasp by understanding a few basic concepts