const express = require('express');
const router = express.Router();

const { createTask, getTasks } = require('../controllers/taskControllers'); 

// Criação de task
router.post('/novatask', createTask);

// Listar tasks
router.get('/', getTasks);



module.exports = router;