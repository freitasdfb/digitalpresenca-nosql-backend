const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

class AuthController {

  async authenticate (req, res) {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await User.findOne({ email });

    if(!user)
      return res.status(400).send({error: 'User not found'});

      //Não está funcionando
    if(!password == user.password)
      return res.status(400).send({error: 'Password not match'});

      const token = jwt.sign({ id: user.id }, authConfig.secret , {
        expiresIn: 86400,
      });

    res.status(200).send({ user, token })
  }
}

module.exports = new AuthController();
