# Relational Database Design

- **Candidate Key**
	- Enforced by constraint
		- Primary key -> **PRIMARY KEY** constraint
		- Required by Codd's 2nd rule
		- At most one
	- Alternate key -> **UNIQUE** constraint
- Primary key vs alternate key:
	- Primary key is default target for **FOREIGN KEY** constraint
	- Primary key must be on **NOT NULL** columns