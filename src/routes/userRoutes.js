const express = require('express');
const router = express.Router();

const { createUser, getUsers} = require('../controllers/userControllers');

// Criação de user 
router.post('/novouser', createUser);

// Listar users
router.get('/', getUsers);

module.exports = router