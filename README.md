<h1>API REST - Lista de Tarefas</h1> 

<h2>API com Nodejs, Express, Mongodb, dotenv, documentando rotas em Swagger</h2>

- npm install 
- npm run dev 

- O arquivo .example.env é o modelo para criar o archivo .env

- API documentada em Swagger http://localhost:3000/api-docs/ 
/user/novouser POST Cria usuario
/user/ GET Todos os usuarios
/users/:id GET Lista usuario por ID

- User
- POST: /user/novouser Criar usuario
- GET: /user Listar todos os usuarios 
- GET /user/user/:id Listar usuario por id
- PUT: /user/:id Atualizar usuario 
- DELETE: /user/:id Deletar usuario

- Task
- POST: /task/novatask Criar task
- GET: /task Listar todos as tasks 
- GET /task/task/:id Listar task por id
- GET: /task/taskeuser Listar tasks e users
- GET: /task/taskideuser/:id Listar task por id e user
- PUT: /task/:id Atualizar task 
- DELETE: /task/:id Deletar task