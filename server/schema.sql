DROP DATABASE IF EXISTS mysql_test;

CREATE DATABASE mysql_test;

USE mysql_test;

CREATE TABLE robots (
  robots_id int AUTO_INCREMENT PRIMARY KEY,
  model varchar(255),
  description varchar(255)
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/