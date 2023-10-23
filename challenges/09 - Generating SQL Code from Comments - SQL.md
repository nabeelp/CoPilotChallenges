### Challenge: Generating SQL Code from Comments

#### Task Description:

You are provided with comments specifying the structure of a database. Your task is to use GitHub Copilot to assist you in generating the corresponding SQL code to create the database and its tables within a .SQL file.

#### Comments:

```sql
-- Database Name: OnlineStore

-- Tables:
--   - Customers (customer_id, first_name, last_name, email)
--   - Orders (order_id, customer_id, order_date, total_amount)
--   - Products (product_id, product_name, unit_price, stock_quantity)
--   - OrderItems (item_id, order_id, product_id, quantity)
```

#### Instructions:

1. Create a new .SQL file named `generate_db.sql`.
2. Use GitHub Copilot to assist you in generating the SQL code to create the database and tables based on the provided comments.
3. Ensure that the generated SQL code accurately reflects the database structure described in the comments.

#### Challenge Notes:

- Pay attention to the table names and their respective fields specified in the comments.

#### Sample Code (Generated with CoPilot):

```sql
CREATE DATABASE IF NOT EXISTS OnlineStore;

USE OnlineStore;

CREATE TABLE IF NOT EXISTS Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE IF NOT EXISTS Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    unit_price DECIMAL(10,2),
    stock_quantity INT
);

CREATE TABLE IF NOT EXISTS OrderItems (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
```

#### Expected Output:

If implemented correctly, the provided .SQL file should contain SQL code that creates a database named `OnlineStore` and the corresponding tables (Customers, Orders, Products, and OrderItems) with the specified fields.

#### Challenge Conclusion:

This exercise demonstrates how you can use GitHub Copilot to generate SQL code based on provided comments within a .SQL file. It showcases the power of using AI assistance in code generation.
