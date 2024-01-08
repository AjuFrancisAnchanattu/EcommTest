for Database plese use the following commands 

Sql commands used 

CREATE DATABASE ecomtestdb;
USE ecomtestdb;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insert Sample Data

INSERT INTO users (email, password) VALUES
('user1@example.com', 'hashed_password_1'),
('user2@example.com', 'hashed_password_2');

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert Sample Data
INSERT INTO products (name, price) VALUES
('Product 1', 19.99),
('Product 2', 29.99),
('Product 3', 39.99);
