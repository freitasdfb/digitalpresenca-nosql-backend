const path = require('path');
const express = require('express');
const routes = express.Router();
const qrcode = require('yaqrcode');
// const bodyParser = require('body-parser')
// const base642img = require('base64-to-image')
// const base642img = require('base64-img');

const EventController = require('./controllers/EventController');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const AuthMiddleware = require('./middlewares/auth');

routes.use(AuthMiddleware);

routes.post('/auth', AuthController.authenticate);

routes.post('/events/:idUser',AuthMiddleware, EventController.store);
routes.put('/events/:idUser/:idEvent/add', AuthMiddleware, EventController.addUser);
routes.get('/events', AuthMiddleware, EventController.show);
routes.get('/events/:id', EventController.showOne);
// routes.post('events/register/:idUser/:idEvent', EventController.register);

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);

module.exports = routes;
