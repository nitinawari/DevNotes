# PostgreSQL Cheatsheet

- command needed for daily use

*15 august 2025*

## 1. Installation & Setup

### On Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```
---
## 2.Start and Enable PostgreSQL Service
```bash 
sudo systemctl enable postgresql  # enable first time 
sudo systemctl start postgresql   #start/stop
sudo systemctl status postgresql  # check running status 
```
---

## 3.Switching to PostgreSQL User
- PostgreSQL runs under a postgres system user:
```bash
sudo -i -u postgres
```

- Enter the PostgreSQL CLI:
```bash
psql
```

- You should see:
```bash
postgres=#
```

-Exit psql:
```bash
\q
```
---

## 4. basic command 
 ####  In `linux` shell
 ```bash
 psql -h host -U username -d dbname
```
 - `-h`  host → the server hostname or IP (use localhost if PostgreSQL is on your machine)
 - `-U` username → PostgreSQL username
 - `-d` dbname → database name you want to connect to

 #### In `psql` shell 
 ```bash 
\l            -- list databases
\c dbname     -- connect to a database
\dt           -- list tables
\d tablename  -- describe table structure
\du           -- list users/roles
\q            -- quit psql
```
---

## 5.Database & Table Management

- Create database
```bash
CREATE DATABASE mydb;
```

- Drop database
```bash
DROP DATABASE mydb;
```

- Create table
```bash
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- Drop table
```bash
DROP TABLE users;
```

- Add column
```bash
ALTER TABLE users ADD COLUMN age INT;
```

- Remove column
```bash
ALTER TABLE users DROP COLUMN age;
```

- Rename table
```bash
ALTER TABLE users RENAME TO app_users;
```
---

## 6. Data Manipulation

- Insert data
```bash
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
```

- Update data
```bash
UPDATE users SET name = 'Bob' WHERE id = 1;
```

- Delete data
```bash
DELETE FROM users WHERE id = 1;
```

- Select data
```bash
SELECT * FROM users;
SELECT name, email FROM users WHERE id = 2;
```

---

## 7. Query Filters & Operators

- WHERE clause
```bash
SELECT * FROM users WHERE age > 25;
```

- LIKE
```bash
SELECT * FROM users WHERE name LIKE 'A%';
```

- IN
```bash
SELECT * FROM users WHERE id IN (1,2,3);
```

- ORDER BY
```bash
SELECT * FROM users ORDER BY created_at DESC;
```

- LIMIT
```bash
SELECT * FROM users LIMIT 5;
```

---

## 8. Data Manipulation

- Insert data
```bash
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
```

- Update data
```bash
UPDATE users SET name = 'Bob' WHERE id = 1;
```

- Delete data
```bash
DELETE FROM users WHERE id = 1;
```

- Select data
```bash
SELECT * FROM users;
SELECT name, email FROM users WHERE id = 2;
```

---

## 9. Aggregation & Grouping

- Count rows
```bash
SELECT COUNT(*) FROM users;
```

- Sum, Avg, Min, Max
```bash
SELECT AVG(age) FROM users;
SELECT SUM(age) FROM users;
SELECT MIN(age), MAX(age) FROM users;
```

- Group by
```bash
SELECT age, COUNT(*) FROM users GROUP BY age;
```

---

## 10. Joins

- Inner join
```bash
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

- Left join
```bash
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

---

## 11. Indexes

- Create an index
```bash
CREATE INDEX idx_users_name ON users(name);
```

- Drop an index
```bash
DROP INDEX idx_users_name;
```

---

## 12. Transactions

- Start transaction
```bash
BEGIN;
```

- Commit transaction
```bash
COMMIT;
```

- Rollback transaction
```bash
ROLLBACK;
```

---

## 13. Miscellaneous

- Show current user
```bash
SELECT current_user;
```

- Show version
```bash
SELECT version();
```

- Describe table
```bash
\d+ table_name
```

---