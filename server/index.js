// index.js
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vivekjohn@123', // ← Replace with your password
  database: 'portfolio_db'    // ← Replace with your DB name
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Routes

// GET projects
app.get('/projects', (req, res) => {
  const query = 'SELECT * FROM projects ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching projects:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

// POST contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('❌ Error saving contact:', err);
      res.status(500).json({ error: 'Failed to save contact' });
    } else {
      res.status(200).json({ message: 'Message received successfully!' });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
