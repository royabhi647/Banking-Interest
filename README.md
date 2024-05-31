## Fixed Deposit Interest Calculator

### Project Description
This project is a responsive web application for calculating the interest rate and interest amount for a fixed deposit in a bank. It uses a React.js frontend and a Node.js backend, with MySQL for data storage.

### [live preview](https://abhii-crypto.netlify.app/)

### Tech Stack
   - <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript, React.js
   - <strong>Backend:</strong> Node.js, Express.js
   - <strong>Database:</strong> MySQL
   - <strong>Database Management:</strong> phpMyAdmin

### Features

   1. <strong>Responsive Design:</strong> Compatible with desktop, tablet, and mobile views.
   2. <strong>Two Screens:</strong>
      - <strong>Screen 1:</strong> Collects customer details.
      - <strong>Screen 2:</strong> Collects deposit details and calculates interest.
   3. <strong>Validation:</strong> All fields are validated using RegEx and JavaScript.
   4. <strong>Popup</strong>: Displays the interest rate and amount in a popup after form submission.

### Requirements
   - Node.js
   - MySQL
   - phpMyAdmin

### Setup Instructions
   1. Database Setup

      1. Start MySQL Server:
         Make sure your MySQL server is running.
      2. Create Database and Tables:
         - Open phpMyAdmin.
         - Create a new database named `banking`.
         - Execute the following SQL commands to create the required tables:
           <code>
               CREATE DATABASE banking;

               USE banking;

               CREATE TABLE interest_rates (
                  id INT AUTO_INCREMENT PRIMARY KEY,
                  min_days INT NOT NULL,
                  max_days INT NOT NULL,
                  interest_rate FLOAT NOT NULL
               );

               INSERT INTO interest_rates (min_days, max_days, interest_rate) VALUES
               (1, 365, 5.0),
               (366, 730, 6.5),
               (731, 1095, 7.25),
               (1096, 9999, 7.75);

               CREATE TABLE offer (
                  id INT AUTO_INCREMENT PRIMARY KEY,
                  first_name VARCHAR(100) NOT NULL,
                  last_name VARCHAR(100) NOT NULL,
                  email VARCHAR(100) NOT NULL,
                  mobile VARCHAR(10) NOT NULL,
                  deposit_amount FLOAT NOT NULL,
                  duration INT NOT NULL
               );
            </code>

   2. Backend Setup
      1. Install Node.js
      2. Clone the Repository:
         <pre>git clone https://github.com/royabhi647/Banking-Interest.git</pre>
      3. Navigate to the Backend Directory:
      4. Install dependencies:
         <pre>npm install</pre>