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
  database: 'appGestaoFinanceira',
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

// Endpoint para adicionar usuário
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  const sql = 'INSERT INTO usuario (nome, email, senha) values (?, ?, ?)';
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, nome, email, senha });
  });
});

// Endpoint para listar usuários
app.get('/cadastro', (req, res) => {
  db.query('SELECT * FROM usuario', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Endpoint para validar usuários
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const sql = 'SELECT * FROM usuario WHERE email= ? AND senha= ?';
  db.query(sql, [email, senha], (err, results) => {
    if (err) {
      res.status(500).send('Erro no servidor');
    } else if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false, message: 'Credenciais inválidas' });
    }
  });
});

// Endpoint para adicionar receita
app.post('/receita', (req, res) => {
  const { valor, dataReceita, categoria, descricao, id_usuario } = req.body;
  const sql = 'INSERT INTO receita (valor, dataReceita, categoria, descricao, id_usuario) values (?, ?, ?, ?, ?)';
  db.query(sql, [valor, dataReceita, categoria, descricao, id_usuario], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, valor, dataReceita, categoria, descricao, id_usuario });
  });
});

// Endpoint para listar receitas
app.get('/receita', (req, res) => {
  db.query('SELECT * FROM receita', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete('/receita/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM receita WHERE id_receita = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao deletar receita.');
      console.error(err);
    } else {
      res.send('Receita deletada com sucesso.');
    }
  });
});

app.put('/receita/:id', (req, res) => {
  const { id } = req.params;
  const { valor, dataReceita, categoria, descricao } = req.body;
  const sql = 'UPDATE receita SET valor = ?, dataReceita = ?, categoria = ?, descricao = ? WHERE id_receita = ?';
  db.query(sql, [valor, dataReceita, categoria, descricao, id], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao atualizar receita.');
      console.error(err);
    } else {
      res.send('Receita atualizada com sucesso.');
    }
  });
});


app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
