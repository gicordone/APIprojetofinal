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
/**
 * @swagger
 * /user:
 *  get:
 *    description: Listar users
 *    tags: [User]
 *    responses:
 *      "200":
 *        description: otima resposta
 *  */
router.get('/', getUsers);

// Get user por id  
/**
 * @swagger
 * /user/user/{id}:
 *  get:
 *      description: user por id
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true 
 *      responses:
 *          200:
 *              description: user encontrada 
 *          422:
 *              description: user não encontrada
 */
router.get('/user/:id', getUserId);

// Atualizar user
/**
 * @swagger
 * /user/{id}:
 *  put:
 *      description: atualizar user
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true
 *      requestBody:
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
 *      responses:
 *          200:
 *              description: user atualizado
 *          422:
 *              description: user não encontrado
 */

router.put('/:id', putUser);

// Deletar user
/**
 * @swagger
 * /user/{id}:
 *  delete:
 *      description: deletar user
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:  
 *              type: string
 *          required: true 
 *      responses:
 *          200:
 *              description: user deletado
 *          422:
 *              description: user não encontrada
 */
router.delete('/:id', deleteUser);



module.exports = router