const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
  const authHeader = req.get('authorization');

  // console.log(authHeader);


  if(!authHeader)
    return res.status(401).send({ error: 'Without Toker'});

  const parts = authHeader.split('');

  const token = req.get('authorization');


  if(!parts.lenght === 2)
    return res.status(401).send({error: 'Token lenght invalid'});

  // const  { token } = parts;

  // console.log(`${parts}`);

  // if(!/^Bearer$/i.test(scheme))
  //   return res.status(401).send({error: 'Token format error'})

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if(err) return res.status(401).send({ error: 'Token error', errorMsg: err })

    req.userId = decoded.id;

    return next();

  })


}
