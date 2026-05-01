# CS208 Full Stack Final Project - Donut Shop Application

- Name: Jonibek Utaev
- GitHub: https://github.com/JonibekU/Final-Project
- Term: Spring 2026

## Project Description

# Downtown Donuts Website Prototype

## Overview
This project is a full-stack prototype website for Downtown Donuts, a family-owned donut shop. The goal was to create a modern, cozy, and mobile-friendly design while implementing full-stack functionality such as a customer comments system.

---

## Setup Instructions

1. Clone the repository:
   git clone <your-repo-url>

2. Install dependencies:
   npm install

3. Start MySQL:
   sudo service mysql start

4. Open MySQL:
   sudo mysql

5. Create database:
   CREATE DATABASE cs208demo;
   USE cs208demo;

6. Create comments table:
   CREATE TABLE comments (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100),
     comment TEXT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

7. Start the app:
   npm start

8. Open browser:
   http://localhost:3000

---

## Design Decisions

1. **Color Scheme**
   I used a gold and dark green color palette to match the brand and create a cozy, warm feeling.

2. **Navigation Bar**
   I implemented a simple top navigation bar with a dropdown for online ordering to keep the layout clean and modern.

3. **Comments System**
   I designed the comments section to look like review cards to improve readability and user experience.

---

## Edge Cases

- **Empty Input**
  The server checks if name or comment fields are empty and prevents submission.

- **Long Input**
  Input fields are limited and handled to prevent extremely long text submissions.

- **Server Errors**
  If the database fails, the user sees a friendly error message instead of a crash.

- **Double Click Submit**
  Redirect behavior prevents duplicate submissions.

---

## Challenges & Learnings

1. **Database Connection Issues**
   I had trouble connecting to MySQL due to authentication errors. I solved this by creating a dedicated database user instead of using root.

2. **Pug Indentation Errors**
   Pug is very strict about spacing, and I encountered multiple crashes due to inconsistent indentation. I fixed this by standardizing to spaces only.

---

## Citations

- Express.js Documentation   https://expressjs.com/en/guide/using-middleware.html
- MySQL2 Documentation  https://www.npmjs.com/package/mysql2
- W3Schools CSS Reference  https://www.w3schools.com/cssref/pr_background-color.php
- Stack Overflow (debugging database and routing issues) https://stackoverflow.com/questions/3161315/how-to-debug-a-database-query-for-performance
