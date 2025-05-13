const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { name, email, stress_level, mood } = req.body;
  const sql = 'INSERT INTO students (name, email, stress_level, mood) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, stress_level, mood], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Student added', id: result.insertId });
  });
});

module.exports = router;
