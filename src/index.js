// config inicial
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')

const options = {
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
        ],
    },
    apis: ['./routes/*.js']
};


const specs = swaggerJsDoc(options)

//middleware
app.use(express.json())
app.use('/user', userRoutes);
app.use('/task', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to Mongodb Atlas'))
    .catch((error) => console.error(error));

//entregando port
app.listen(port, () => console.log('server listening on port', port));