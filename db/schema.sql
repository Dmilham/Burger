
-- creates our database called burgers_db
CREATE DATABASE burgers_db;

-- Utilize the new burgers_db database
USE burgers_db;

-- Creates a table called burger and enters these parameters
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devouered boolean NOT NULL,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
	
);

