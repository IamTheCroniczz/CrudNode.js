const db = require('../config/db');


const User = {
    // Esta linha define uma função chamada que recebe um único argumento,
    getAllUsers: (callback) => {
        // Esta linha declara uma cadeia de caracteres de consulta SQL que
        // seleciona todas as colunas (*) da tabela
        const sql = 'SELECT * FROM users';

        // Esta linha executa a consulta SQL usando uma função
        db.query(sql, (err, results) => {
            // Se ocorrer um erro durante a execução da consulta, o objeto será gerado,
            // e isso provavelmente interromperá o aplicativo ou disparará um manipulador de erros.
            if (err) throw err;
            
            // Se a consulta for bem-sucedida, o objeto será passado para a função
            callback(results);
        });
    },
    getUserById: (id, callback) => {
        // Esta linha declara uma cadeia de caracteres de consulta SQL que
        // seleciona todas as colunas (*) da tabela
        const sql = 'SELECT * FROM users WHERE id =  ?';

        // Esta linha executa a consulta SQL usando uma função
        db.query(sql, [id] ,  (err, results) => {
            // Se ocorrer um erro durante a execução da consulta, o objeto será gerado,
            // e isso provavelmente interromperá o aplicativo ou disparará um manipulador de erros.
            if (err) throw err;
            
            // Se a consulta for bem-sucedida, o objeto será passado para a função
            callback(results[0]);
        });
    },


    //add novo user
    addUser: (data, callback) =>{
        const sql = 'INSERT INTO users SET ?';
        db.query (sql, data, (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },

    updateUser : (id, data, callback) => {
        const sql = 'UPDATE users SET ? WHERE id = ?';
        db.query(sql, [data, id ], (err, result) =>{
            if (err) throw err;
            callback(result);
        });
    },
    deleteUser : (id,callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [id ], (err, result) =>{
            if (err) throw err;
            callback(result);
        });
    },
};

module.exports = User;
