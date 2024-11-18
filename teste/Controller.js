//Constantes
const express=require('express');
const bodyParser=require('body-parser');
const mercadopago=require('mercadopago');
const cors=require('cors');

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));//serve para trabalhar com requisições post
app.use(bodyParser.json());//serve para trabalhar com requisições json

//Routes
app.post('create',async(req,res)=>{
    let reqs = await model.User.create({
        'name':req.body.nameUser,
        'password':req.body.passwordUser,
        'email':req.body.emailUser,
        'createdAt':new Date(),
        'updatedAt':new Date()
        
    });
    console.log(req.body.nameUser)
    console.log(req.body.passwordUser)
    console.log(req.body.emailUser)
    if(reqs){
        res.send(JSON.stringify('O usuário foi cadastrado com sucesso!'));
    }
});

//Start server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});