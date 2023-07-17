import nc from 'next-connect';

import dbConnect from '../../utils/db';
import data from '../../utils/data';
import User from '../../models/User';
import Formateur from '../../models/Formateur';
import Cycle from '../../models/Cycle';
const handler = nc();

handler.get(async (req, res) => {
  await dbConnect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Formateur.deleteMany();
  await Formateur.insertMany(data.formateurs);
  await Cycle.deleteMany();
  await Cycle.insertMany(data.cycles);

  res.send({ message: 'seeded successfully' });
});

export default handler;
