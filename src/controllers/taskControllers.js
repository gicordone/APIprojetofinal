const taskSchema = require('../models/Task')

// Criação de task
async function createTask(req, res) {
    const { description, role, done } = req.body

    if (!description || !role || done === "" ) {
        res.status(400).send("Por favor, preencher o campo")
    }
    else {
        const task  = {
            description,
            role,
            done
        }
        try {
            await taskSchema.create(task)
            res.status(201).json({ message: 'Task criada com sucesso' })

        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
};

// Listar tasks
async function getTasks(req, res) {
    try {
        const task = await taskSchema.find()
        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({ error: error })
    }
};




module.exports = { createTask, getTasks }; 