
const express = require('express');
const path = require('path');
const database = require('./db/db.json');

const app = express();
const PORT = 3001;


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve html, css files, js files from the public directory
app.use(express.static('./public'));


// Return db.json data at /api/Notes
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(JSON.parse(data));
        }
    })
})









app.listen(PORT, () => {
    console.log(`Starting server on http://localhost:${PORT}`);
});