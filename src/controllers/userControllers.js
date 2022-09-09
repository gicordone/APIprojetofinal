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










module.exports = { createUser }; 