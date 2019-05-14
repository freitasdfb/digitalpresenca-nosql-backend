const path = require('path');
const express = require('express');
const routes = express.Router();
const qrcode = require('yaqrcode');
// const base642img = require('base64-to-image')
const base642img = require('base64-img');

const EventController = require('./controllers/EventController');
const UserController = require('./controllers/UserController');

routes.post('/events', EventController.store);
routes.put('/events/:idUser/:idEvent/add', EventController.addUser);
routes.get('/events',EventController.show);
routes.get('/events/:id', EventController.showOne);
// routes.post('events/register/:idUser/:idEvent', EventController.register);

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);


// Rota para gerar QRCode (apenas teste)
routes.post('/qrcode', (req, res) => {
  const base64qrcode = qrcode('http://tecmundo.com.br');

    base642img.img(base64qrcode, path.resolve(__dirname,'img'), 'qrcode', (err, filepath) => {
    if(err){
      console.log(err)
    }
  })

  return res.send(imgInfo)

});

module.exports = routes;
