const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


mongoose.connect('mongodb+srv://victor:victor123@cluster0-3yucu.mongodb.net/digitalpresenca?retryWrites=true', {
  useNewUrlParser: true,
});

//Para aceitar CORS
app.use(cors());
//Para retornar json
app.use(express.json());
//Para realizar envio de arquivos
app.use(express.urlencoded({ extended: true }));
//Arquivo de rotas
app.use(require('./routes'));


app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
})