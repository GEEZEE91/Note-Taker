
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve html, css files, js files from the public directory
app.use(express.static('./public'));



//html and api route
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
    console.log(`Starting server on http://localhost:${PORT}`);
});
});
