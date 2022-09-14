const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Projeto Final",
            version: "1.0.0",
            description: "API REST de Lista de Tarefas - Operações CRUD"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
};


module.exports = options; 