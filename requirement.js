/*
Requirements

Book:
- ISBN no.          - String
- Title             - String
- Author            - [String]
- Language          - String
- Publications      - Number
- No. of Pages      - Number
- Categories        - [String]

Authors
- id                - Number
- Name              - String
- Books             - [String]

Publications
- id                - Number
- Name              - String
- Books             - [String]

---API---
Book:
 - GET
    1. to get all books.
    2. to get specific books.
    3. to get a list of books based on category.
    4. to get a list of books based on author.

 - POST
 1. to add new book

 - PUT
   1. to update book details.
   2. to update/add new authors.

 - DELETE
   1. delete a book.
   2. delete an author from the book.
.

Authors
 - GET
  1. to get all authors
  2. to get specific authors.
  3. to get a list of authors based on a book.

 -POST
  1. to add new author
  
 - PUT
  1. update author details
  
 - DELETE
  1.delete an author.
.

Publication

 - GET
  1. to get all publications.
  2. to get specific publication.
  3. to get a list of publication based on a book.
 
 - POST
  1. add new publication

 - PUT
  1. update publication
  2. update/add a new book

 - DELETE
  1. delete a book from publication. 
  2. delete a publication.
    


*/ 