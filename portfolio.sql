-- Create the database
CREATE DATABASE IF NOT EXISTS portfolio;

--switch to database
USE portfolio;

--create table
CREATE TABLE portfolio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    ticker VARCHAR(10) NOT NULL,
    quantity INT NOT NULL,
    buyPrice DECIMAL(10, 2) NOT NULL
);

 