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
 *                              type: string
 *      required: true
 *      responses:
 *        200:
 *          description: Task criada com sucesso
 */
router.post('/novatask', createTask);

//  Listar tasks
/**
 * @swagger
 * /task:
 *  get:
 *    description: Listar tasks
 *    tags: [Task]
 *    responses:
 *      200:
 *        description: otima resposta
 *  */
 
router.get('/', getTasks);

// Get task por id  
/**
 * @swagger
 * /task/task/{id}:
 *  get:
 *      description: task por id
 *      tags: [Task]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true 
 *      responses:
 *          200:
 *              description: task encontrada 
 *          422:
 *              description: task não encontrada
 */
router.get('/task/:id', getTaskId);

// Listar todas as tasks e users
/**
 * @swagger
 * /task/taskeuser:
 *  get:
 *      description: Listar tasks e users
 *      tags: [Task]
 *      responses:
 *          200:
 *              description: tasks encontradas
 *          422:
 *              description: tasks não encontradas
 */
router.get('/taskeuser', getTaskWithUser);

// Listar task-id com usuario
/**
 * @swagger
 * /task/taskideuser/{id}:
 *  get:
 *      description: Listar task por id e user
 *      tags: [Task]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true 
 *      responses:
 *          200:
 *              description: task encontrada 
 *          422:
 *              description: task não encontrada
 */
router.get('/taskideuser/:id', getTaskIdWithUser);

// Atualizar task

router.put('/:id', putTask);

// Deletar task
/**
 * @swagger
 * /task/{id}:
 *  delete:
 *      description: deletar task
 *      tags: [Task]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true 
 *      responses:
 *          200:
 *              description: task deletada
 *          422:
 *              description: task não encontrada
 */
router.delete('/:id', deleteTask);



module.exports = router;