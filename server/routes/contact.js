import express from 'express';
import db from '../db.js';

const router = express.Router();

router.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error saving contact:', err);
      return res.status(500).json({ error: 'Database error.' });
    }
    res.status(200).json({ message: 'Contact submitted successfully!' });
  });
});

export default router;
