const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());

// POST /games
app.post('/games', async (req, res) => {
  const { name, category, releaseDate, price } = req.body;
  try {
    await pool.query(
      'INSERT INTO games (name, category, release_date, price) VALUES ($1, $2, $3, $4)',
      [name, category, releaseDate, price]
    );
    res.status(201).send('Game added');
  } catch (err) {
    console.error(err);
    res.status(500).send('DB Error');
  }
});

// GET /games
app.get('/games', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM games');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('DB Error');
  }
});

app.listen(3001, () => {
  console.log('🎮 Game Service running on port 3001');
});
