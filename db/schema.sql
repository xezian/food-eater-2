-- Schema for creating the food-eater database
DROP DATABASE IF EXISTS food_eater;
CREATE DATABASE food_eater;
USE food_eater;

CREATE TABLE foods
(
	id int NOT NULL AUTO_INCREMENT,
	food_name varchar(255) NOT NULL,
	eaten BOOL NOT NULL,
	PRIMARY KEY (id)
);