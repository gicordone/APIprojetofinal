// config inicial
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('./swagger');
const path = require('path');

//  settings
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes');
const { options } = require('./routes/userRoutes');

//middleware
app.use(express.json())
app.use('/user', userRoutes);
app.use('/task', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to Mongodb Atlas'))
    .catch((error) => console.error(error));

//entregando port
app.listen(port, () => console.log('server listening on port', port));