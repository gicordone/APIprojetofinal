const express = require('express');
const router = express.Router();

const { createTask } = require('../controllers/taskControllers'); 

// Criação de task
router.post('/novatask', createTask);


module.exports = router;