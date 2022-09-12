const taskSchema = require('../models/Task')

// Criação de task
async function createTask(req, res) {
    const { description, role, done, user } = req.body

    if (!description || !role || done === "" || !user) {
        res.status(400).send("Por favor, preencher o campo")
    }
    else {
        const task = {
            description,
            role,
            done,
            user
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

// Listar tasks com users
async function getTaskWithUser(req, res) {
    try {
        const task = await taskSchema.find().populate('user') 
        // o parametro de populate() é o *ATRIBUTO* relacionado
        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({ error: error })
    }
};

// Get task por id  
async function getTaskId(req, res) {
    const id = req.params.id;
    if (!id) {
        res.status(422).json({ message: 'Task não encontrada' })
    } else {
    try {
        const task = await taskSchema.findOne({ _id: id })
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
};

// Atualizar task
async function putTask(req, res) {
    const id = req.params.id;
    const { description, role, done, user } = req.body
    const task = {
        description,
        role,
        done,
        user
    }
    try {
        await taskSchema.updateOne(task)
        if (task.matchedCount === 0) {
            res.status(422).json({ message: 'A task não foi encontrada' })
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error: error })
    }
};

//  Deletar task 
async function deleteTask(req, res) {
    const id = req.params.id
    const task = await taskSchema.findOne({ _id: id })
    if (!task) {
        res.status(422).json({ message: 'A task não foi encontrada' })
    } else {

        try {
            await taskSchema.deleteOne({ _id: id })
            res.status(200).json({ message: 'Task removida com sucesso' })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
};



module.exports = { createTask, getTasks, getTaskId, getTaskWithUser, putTask, deleteTask }; 