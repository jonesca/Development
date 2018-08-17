# Normalization

## Basic Normal Forms

- First Normal Form (1NF)
- Second Normal Form (2NF)
- Third Normal Form (3NF)

## Why Normalize

- Non-atomic values
  - Complex code required
  - Performance impact
- Redundancy
  - Same fact stored multiple times. **Note:** repeating a *value* is not redundant; a database stores facts as values not values as facts. For example, Jack and Jane may both have HairColor of Red.  Red will be stored twice and is not a redundant fact even though the value of Red is entered twice.
  - Storage space wasted
  - Performance impact
  - Possibility of conflicting data
  - Derived facts: special case of redundancy
- Modification anomalies
  - Design causes modifications to have unwanted side effects

### Redundancy: Misconceptions

- Not all redundancy is bad
  - Redundancy can help performance
  - Derived data may be impossible to derive again later
  - Derived data may be too expensive to derive every time (ie. bank balance)
- Uncontrolled redundancy **_IS_** bad!
  - Mark duplicated data as such
  - Mark derived data as such
  - Prevent inconsistent data

### How to normalize

- Steps
  - First Normal Form (1NF)
  - Second Normal Form (2NF)
  - Third Normal Form (3NF)
  - Elementary Key Normal Form (EKNF)
  - Boyce-Codd Normal Form (BCNF)
  - Fourth Normal Form (4NF)
  - Fifth Normal Form (5NF)
  - Domain/Key Normal Form (DKNF)
  - Sixth Normal Foprm (6NF)
- Normal forms apply to tables
- Normal form of database = lowest normal form of all its tables.  **ALL** tables should be normalized to at least 3NF

### When to normalize

- Most Common
  - Convert ER model to relational tables
  - Normalize relational tables
  - **Disadvantage:** changes musts be ported back to ER model

- Alternative
  - Normalize ER model
  - Convert normalized ER model to relational tables
  - **Disadvantage:** normalization is a bit more complicated
    - Normalize "every object that will eventually become a table"
    - For IDEF1X:
      - every entity type
      - every many-to-many relationship

## Functional dependencies

- Mathematical function (f(x) -> y)
  - For every value of x:
    - Exactly one value of y can be computed, or
    - The value of y is not defined
- Functional dependency (attribute A -> attribute B)
  - For every value of A:
    - Exactly one value of B can be determined, or
    - There is no value of B
  - "Attribute B is functionally dependent on attribute A"
  - "Attribute B functionally depends or attribute A"

**Example**: A name might yield a birthdate (or no birthdate listed); however, a birthdate might yield many names.  Birthdate is functionally dependent on name but name is not functionally dependent on birthdate.  Name is the **_Determinant_** and birthdate is the **_Dependent attribute_**

### Properties of functional dependencies

- Can be mutual
  - Most are not
- Can be a combination of two or more attributes. For example if to names are the same another value would be needed to make the determinant unique.
- Depend on "Univers of Discourse"
  - Beware when making assumptions!
- If X depends on Y, it also depends on any superset of Y
  - If Value A returns a single Value B then the combination of Value A with any other Value can still only return a single value B.
  - Dependency on two or more attributes can sometimes be reduced
  - _Full_ dependency: Functional dependency that cannot be reduced
- Every attribute depends on itself (an on each superset of itself)
  - _Trivial_ dependency

### Functional dependencies and normalization

- Normalization uses functional dependenies that are:
  - Non-tribial
  - Full

## First Normal Form

- Requirements for 1NF:
  - Table must have a key
    - (that all attributes depend on)
  - Every column stores _atomic_ values
    - Not composite (ie. Full name as opposed to first and last)
    - Not a repeating group (ie. phone number as opposed to home, cell, work, etc...)
- Candidate keys
  - Attribute that can be used to identify individual rows
  - Combination of attributes that acan be used to identify individual rows
    - Has to be minimal (not containing all attributes of another candidate key)
  - Do not choose primary key yet

### Finding candidate keys

- Use functional dependencies
  - An attribue is a candidate key if all other attributes depend on it
  - A combination of attributes is candidate key if:
    - It is not a superset of another candidate key
    - All other attributes depend on the combination or a subset of the combination
    - Multiple candidate keys are always mutually dependent

## Second Normal Form

### Requirements for 2NF

- Table must being 1NF
- Non-key attributes must not depend on subset of any candidate key; rathr thay must depend on the whole key

### Fixing 2NF Violations

- New entity type for offending functional dependency
- Original entity type:
  - Remove dependent attributes
  - Determinant implements relationship between tables

## Third Normal Form

### Requirements for 3NF

- Must be in 2NF
- Non-prime attributes must be nan-transitively dependent on every superkey (what the heck does this mean)
  - or: No dependency of non-key attribute on attribute(s) that is/are not a key
    - A non-key attribute depends on one non-key attribute
    - A non-key attribute depends on multiple non-key attributes
    - A non-key attribute depends on combination of candidate key subset and non-key
    - A non-key attribute depends on combination of multiple candidate key subsets

### Fixing 3NF violations

- New entity type for offending functional dependency
- Remove the dependent attributes from original entity
- Determinant implements relationship