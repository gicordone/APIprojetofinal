// config inicial
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')
const path = require('path');

// swagger 
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Projeto Final',
            version: '1.0.0',
            description: 'API REST de Lista de Tarefas - Operações CRUD'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`]
};

// settings
const app = express();
const port = process.env.PORT || 3000;

//middleware`
app.use(express.json())
app.use('/user', userRoutes);
app.use('/task', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)));

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to Mongodb Atlas projeto final'))
    .catch((error) => console.error(error));

//entregando port
app.listen(port, () => console.log('server listening on port', port));