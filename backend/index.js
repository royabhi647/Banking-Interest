const mysql = require('mysql2/promise');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const dbConPromise = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // No password
    database: 'banking'
});

dbConPromise.getConnection()
    .then(connection => {
        console.log('Connected to the MySQL database.');
        connection.release();
    })
    .catch(error => {
        console.error('Database Connection Error', error);
    });

// API endpoint to fetch interest
app.post('/api/fetch_interest', async (req, res) => {
    const { firstName, lastName, email, mobile, depositAmount, duration } = req.body;

    let query = `
        SELECT interest_rate FROM interest_rates 
        WHERE min_days <= ? AND max_days >= ?
    `;

    try {
        const [results] = await dbConPromise.query(query, [duration, duration]);

        if (results.length > 0) {
            const interestRate = results[0].interest_rate;
            const interestAmount = (depositAmount * (duration / 365) * interestRate) / 100;

            // Insert customer data into the 'offer' table
            let insertQuery = `
                INSERT INTO offer (first_name, last_name, email, mobile, deposit_amount, duration)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            await dbConPromise.query(insertQuery, [firstName, lastName, email, mobile, depositAmount, duration]);

            res.json({
                interest_rate: interestRate,
                interest_amount: interestAmount,
                response_code: 200
            });
        } else {
            res.status(400).json({ error: 'Invalid duration' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Database query error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});