const User = require ('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAllUsers((users) => {
        res.render('index', { users });
    });
};

exports.getdeleteByUser = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('dell' , {user});
    });
};
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit' , {user});
    });
};
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    User.authenticate(email, password, (err, user) => {
        if (err || !user) {
            return res.status(401).render('login', { error: 'Credenciais inválidas' });
        }

        // Aqui você pode salvar a sessão do usuário
        req.session.user = user;
        res.redirect('/index'); // Redireciona para a página desejada
    });
};

exports.getUserByIdForLogin = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('login', { user });
    });
};


exports.addUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        fone: req.body.fone,
        endereco: req.body.endereco,
    };
    User.addUser(newUser, () =>{
        res.redirect('/');
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updateUser = {
        name: req.body.name,
        email: req.body.email,
        fone: req.body.fone,
        endereco: req.body.endereco
        
    };
    User.updateUser(userId, updateUser, () =>{
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/');
    });
};

