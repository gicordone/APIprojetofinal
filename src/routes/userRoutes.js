const express = require('express');
const router = express.Router();

const { createUser, getUsers, getUserId, putUser, deleteUser } = require('../controllers/userControllers');

// Criação de user 
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