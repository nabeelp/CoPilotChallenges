-- Database Name: OnlineStore

-- Tables:
--   - Customers (customer_id, first_name, last_name, email)
--   - Orders (order_id, customer_id, order_date, total_amount)
--   - Products (product_id, product_name, unit_price, stock_quantity)
--   - OrderItems (item_id, order_id, product_id, quantity)

-- Create the database
CREATE DATABASE OnlineStore;

-- Use the database
USE OnlineStore;

-- Create the Customers table
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100)
);

-- Create the Orders table
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Create the Products table
CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    unit_price DECIMAL(10, 2),
    stock_quantity INT
);

-- Create the OrderItems table
CREATE TABLE OrderItems (
    item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
