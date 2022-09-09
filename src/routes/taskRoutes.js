const express = require('express');
const router = express.Router();

const { createTask, getTasks, getTaskId, putTask, deleteTask } = require('../controllers/taskControllers'); 

// Criação de task
router.post('/novatask', createTask);

// Listar tasks
router.get('/', getTasks);

// Get task por id  
router.get('/:id', getTaskId );

// Atualizar task
router.put('/:id', putTask );

// Deletar task
router.delete('/:id', deleteTask );



module.exports = router;