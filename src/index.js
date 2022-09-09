const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to Mongodb Atlas'))
.catch((error) => console.error(error));


app.listen(port, () => console.log('server listening on port', port));