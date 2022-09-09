const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/userControllers');

// Criação de user 
router.post('/novouser', createUser);


module.exports = router