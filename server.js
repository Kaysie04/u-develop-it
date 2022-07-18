const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const mysql = require('mysql2')

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username,
        user: 'root',
        // your MySQL password
        password: 'Milo04022021!',
        database: 'election'
    },
    console.log('Connected to the election database.')
)
// // // Retrieve all candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows)
// })

// Retrieve a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(row)
// })

// // Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

// Create a candidate 
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//              VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result)
// })

  















// Default response for any other request (Not Found)
app.use((req,res)=> {
    res.status(404).end()
  })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });