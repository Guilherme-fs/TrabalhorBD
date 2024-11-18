const express = require('express');
// const mysql = require('mysql'); // versão desatualizada
const mysql = require('mysql2'); // versão atualizada
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost', // ou endereço do seu servidor MySQL
  user: 'root',
  password: 'senha', // insira sua senha do MySQL
  database: 'app_react',
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

// Endpoint para listar usuários
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Endpoint para adicionar usuário
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, email });
  });
});


app.post('/validate', (req, res) => {
  const { name, email } = req.body; // Recebe nome e e-mail da requisição
  const sql = 'SELECT * FROM users WHERE name = ? AND email = ?';

  db.query(sql, [name, email], (err, results) => {
    if (err) {
      res.status(500).send('Erro no servidor'); // Erro na execução da query
    } else if (results.length > 0) {
      res.json({ success: true, user: results[0] }); // Usuário encontrado
    } else {
      res.json({ success: false, message: 'Nome ou e-mail inválido' }); // Não encontrado
    }
  });
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
