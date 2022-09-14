const express = require('express');
const router = express.Router();

const { createTask, getTasks, getTaskId, getTaskWithUser, getTaskIdWithUser, putTask, deleteTask } = require('../controllers/taskControllers');

// Criação de task
/**
 * @swagger
 * /task/novatask:
 *  post:
 *      summary: criação de task
 *      tags: [Task]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:
 *                          description: 
 *                              type: string
 *                          role:
 *                              type: string 
 *                          done: 
 *                              type: boolean
 *                          user: 
 *          200:
 *              description: Task criada com sucesso
 */
router.post('/novatask', createTask);

//  Listar tasks
router.get('/', getTasks);

// Get task por id  
router.get('/:id', getTaskId);

// Listar todas as tasks e users
router.get('/taskeuser', getTaskWithUser);

// Listar task-id com usuario
router.get('/taskideuser/:id', getTaskIdWithUser);

// Atualizar task
router.put('/:id', putTask);

// Deletar task
router.delete('/:id', deleteTask);



module.exports = router;