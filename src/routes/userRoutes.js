const express = require('express');
const router = express.Router();

const { createUser, getUsers, getUserId, putUser, deleteUser } = require('../controllers/userControllers');

// Criação de user 
/**
 * @swagger
 * /user/novouser:
 *  post:
 *      summary: criação de user
 *      tags: [User]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:
 *                          name:
 *                              type: string
 *                          age:
 *                              type: number
 *                          telephone: 
 *                              type: number
 *                          email:
 *                              type: string
 *                          role: 
 *                              type: string
 *                  required: true
 *      responses:
 *          200:
 *              description: Task criada com sucesso
 */
router.post('/novouser', createUser);

// Listar users
router.get('/', getUsers);

// Get user por id  
router.get('/:id', getUserId);

// Atualizar user
router.put('/:id', putUser);

// Deletar user
router.delete('/:id', deleteUser);



module.exports = router