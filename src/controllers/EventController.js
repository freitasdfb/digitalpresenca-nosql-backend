const Event = require('../models/Event');
const User = require('../models/User');
// const base64img = require('base64-img');
const qrcode = require('yaqrcode');

class EventController {

  //Criar Evento
  async store(req, res) {
    const event = await Event.create(req.body);
    const user = await User.findById(req.params.idUser);


    event.qrcode = (qrcode(`${event.id}`));
    event.owner = user.id;

    await event.save();

    return res.json(event);
  };

  //Adicionar Usuário a Evento
  async addUser(req, res ){
    const user = await User.findById(req.params.idUser);
    const event = await Event.findById(req.params.idEvent);

    event.users.push(user)
    await event.save();

    user.events.push(event);
    await user.save();

    return res.send('Usuário adicionado ao evento');
  };


  //Mostrar todos os eventos
  async show(req, res){
    const events = await Event.find();

    return res.json(events)
  };

  //Mostrar um evento
  async showOne(req, res) {
    const event = await Event.findById(req.params.id);

    return res.json(event);
  };


}

module.exports = new EventController();
