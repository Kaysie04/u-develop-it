const mysql = require('mysql2')

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

module.exports = db;