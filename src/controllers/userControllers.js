const userSchema = require('../models/User')


async function createUser(req, res) {
    const { name, age, telephone, email, role } = req.body
    if (!name || !age || !telephone || !email || !role) {
        res.status(400).send("Por favor, preencher o campo")
    }
    else {
        const user = {
            name,
            age,
            telephone,
            email,
            role
        }
        try {
            await userSchema.create(user)
            res.status(201).json({ message: 'User criada com sucesso' })

        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
};

async function getUsers(req, res) {
    try {
        const user = await userSchema.find()
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ error: error })
    }
};

async function getUserId(req, res) {
    const id = req.params.id;
    try {
        const user = await userSchema.findOne({ _id: id })
        if (!user) {
            res.status(422).json({ message: 'User não encontrada' })
        } res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error })
    }
};

async function putUser(req, res) {
    const id = req.params.id;
    const { name, age, telephone, email, role } = req.body
    const user = {
        name,
        age,
        telephone,
        email,
        role
    }
    try {
        await userSchema.updateOne(user)
        if (user.matchedCount === 0) {
            res.status(422).json({ message: 'O user não foi encontrado' })
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error })
    }
};

async function deleteUser(req, res) {
    const id = req.params.id
    const user = await userSchema.findOne({ _id: id })
    if (!user) {
        res.status(422).json({ message: 'O user não foi encontrado' })
    } else {

        try {
            await userSchema.deleteOne({ _id: id })
            res.status(200).json({ message: 'User removido com sucesso' })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
};


module.exports = { createUser, getUsers, getUserId, putUser, deleteUser }; 