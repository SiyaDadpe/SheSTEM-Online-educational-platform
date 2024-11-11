const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');


// Create the Express app
const app = express();
const port = 3000;


app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',  // Your MySQL host
  user: 'root',       // Your MySQL username
  password: 'xm8uu2020',       // Your MySQL password
  database: 'SheSTEM',  // The name of your database
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Route to handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query the database to find the user
  db.query('SELECT * FROM ADMIN WHERE EMAIL = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).send('Error querying the database');
    }

    if (results.length === 0) {
      return res.status(400).send('User not found');
    }

    // Compare the submitted password with the stored hash
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error comparing passwords');
      }

      if (isMatch) {
        return res.status(200).send('Login successful');
      } else {
        return res.status(400).send('Invalid credentials');
      }
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
