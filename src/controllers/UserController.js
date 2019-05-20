const User = require('../models/User');

class UserController {
  async store(req, res){
    const user = await User.create(req.body);

    console.log(req.body)

    return res.json(user);
  }

  async show(req, res){
    const users = await User.find();

    return res.json(users);
  }


  async showOneApi(id){
    const user = User.findById(id);

    return user;
  }
}

module.exports = new UserController();
