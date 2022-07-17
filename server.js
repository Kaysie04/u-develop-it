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
    console.log('Connected to the election database. yeaaaa boyyyy!!!!')
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows)
})



  















// Default response for any other request (Not Found)
app.use((req,res)=> {
    res.status(404).end()
  })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });