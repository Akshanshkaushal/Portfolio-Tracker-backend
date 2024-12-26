-- switch to database
USE bpwfeb6omay7h1ki9yim;

-- create table
CREATE TABLE portfolio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    ticker VARCHAR(10) NOT NULL,
    quantity INT NOT NULL,
    buyPrice DECIMAL(10, 2) NOT NULL
);

 