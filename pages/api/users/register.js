import nc from 'next-connect';
import bcrypt from 'bcryptjs';

import User from '../../../models/User';
import dbConnect from '../../../utils/db';
import { signToken } from '../../../utils/auth';
dbConnect();
const handler = nc();

handler.post(async (req, res) => {
  const newUser = new User({
    nomP: req.body.nomP,
    email: req.body.emailR,
    password: bcrypt.hashSync(req.body.passwordR),
    isAdmin: false,
  });
  const user = await newUser.save();
  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    nomP: user.nomP,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default handler;
