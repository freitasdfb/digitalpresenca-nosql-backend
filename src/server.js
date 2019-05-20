const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

//Para aceitar CORS
app.use(cors());

mongoose.connect('mongodb+srv://victor:victor123@cluster0-3yucu.mongodb.net/digitalpresenca?retryWrites=true', {
  useNewUrlParser: true,
});


app.use(bodyParser.urlencoded({
  extended: true
}));

//Para retornar json
app.use(bodyParser.json());
//Para realizar envio de arquivos
app.use(express.urlencoded({ extended: true }));
//Arquivo de rotas
app.use(require('./routes'));


app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor iniciado na porta 3000');
})
