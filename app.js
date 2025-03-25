const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const app = express();
const port = 2000;

// Configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Middleware para parsing do body
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas 
app.get('/', userController.getAllUsers);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', userController.addUser);
app.get('/edit/:id', userController.getUserById);
app.post('/edit/:id', userController.updateUser);
app.get('/dell/:id', userController.getdeleteByUser);
app.post('/dell/:id', userController.deleteUser);
app.post('/login/', userController.loginUser);
app.get('/login', (req, res) => {
    res.render('login', { loginFalhou: false }); 
});


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
