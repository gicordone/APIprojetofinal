const express = require('express');
const router = express.Router();

const { createTask, getTasks, getTaskId, getTaskWithUser, getTaskIdWithUser, putTask, deleteTask } = require('../controllers/taskControllers');

// Criação de task
router.post('/novatask', createTask);

// Listar tasks
router.get('/', getTasks);

// Listar todas as tasks e users
router.get('/taskeuser', getTaskWithUser);

// Listar task-id com usuario
router.get('/taskideuser/:id', getTaskIdWithUser);


// Get task por id  
router.get('/:id', getTaskId);

// Atualizar task
router.put('/:id', putTask);

// Deletar task
router.delete('/:id', deleteTask);



module.exports = router;