const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const db = require('./db/connection')
const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// API Routes
app.use('/api', apiRoutes);



// PARTIES ROUTES

// GET Route for * parties table

app.get('/api/parties', (req, res) => {
    const sql = ` SELECT * FROM parties`;
    db.query(sql, (err,rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return
        }
        res.json({
            message: 'success',
            data: rows
        })
    })
})

// GET Route for single party id from table

app.get('/api/party/:id', (req, res) => {
    const sql = `SELECT * FROM parties WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message})
            return
        }
        res.json({
            message: 'success',
            data: row
        })
    })
})

// DELETE route for party id

app.delete('/api/party/:id', (req, res) => {
    const sql = `DELETE FROM parties WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: res.message });
        // checks if anything was deleted
      } else if (!result.affectedRows) {
        res.json({
          message: 'Party not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});