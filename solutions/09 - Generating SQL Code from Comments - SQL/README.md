### Solution: Generating SQL Code from Comments

#### Task Description:

You are provided with comments specifying the structure of a database. Your task is to use GitHub Copilot to assist you in generating the corresponding SQL code to create the database and its tables within a .SQL file.

#### Instructions:

1. Open Visual Studio Code, if not already open, and navigate to the [OnlineStore.sql](OnlineStore.sql) file.
2. With the file open, press `Ctrl+I` to invoke GitHub CoPilot.
3. In the chat window ask CoPilot to generate the SQL code to create the database and tables based on the provided comments.
4. Review the suggestions and accept a suggestion that is preferred.

#### Challenge Notes:

- Pay attention to the table names and their respective fields specified in the comments.

#### Expected Output:

If implemented correctly, the provided .SQL file should contain SQL code that creates a database named `OnlineStore` and the corresponding tables (Customers, Orders, Products, and OrderItems) with the specified fields.

CoPilot will generate SQL statements similar to the following:
```sql
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
```