create database appGestaoFinanceira;

use appGestaoFinanceira;

create table usuario (
    id_usuario int auto_increment,
    nome varchar(100),
    email varchar(100) unique,
    senha varchar(50),
    primary key(id_usuario)
);
drop table despesa;
create table despesa (
    id_despesa int auto_increment,
    valor decimal(10,2),
    dataDespesa date,
    categoria varchar(50),
    descricao varchar(200),
    id_usuario int,
    primary key(id_despesa),
    foreign key(id_usuario) references usuario(id_usuario) on delete cascade
);

create table receita (
    id_receita int auto_increment,
    valor decimal(10,2),
    dataReceita date,
    categoria varchar(50),
    descricao varchar(200),
    id_usuario int,
    primary key(id_receita),
    foreign key(id_usuario) references usuario(id_usuario) on delete cascade
);

insert into usuario (nome, email, senha) values 
('João Silva', 'joao@email.com', 'senha123'),
('Maria Oliveira', 'maria@email.com', 'senha456');

insert into despesa (valor, dataDespesa, categoria, descricao, id_usuario) values 
(250.50, '2024-11-15', 'Transporte', 'Uber mensal', 1),
(100.00, '2024-11-15', 'Alimentação', 'Jantar no restaurante', 2);

insert into receita (valor, dataReceita, categoria, descricao, id_usuario) values 
(3500.00, '2024-11-01', 'Salário', 'Salário mensal', 1),
(150.00, '2024-11-10', 'Freelance', 'Freelance design', 2);

select * from tabela;
select * from usuario;
select * from despesa;
select * from receita;

SELECT * FROM usuario WHERE email= 'Mario@teste.com' AND senha= 'Senha';
