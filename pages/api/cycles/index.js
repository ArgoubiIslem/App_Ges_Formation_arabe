import Cycle from '../../../models/Cycle';
import dbConnect from '../../../utils/db';
import { getStaticPaths } from 'next';
dbConnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const cycles = await Cycle.find({});
        res.status(200).json({ success: true, data: cycles });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const cycle = await Cycle.create(req.body);

        res.status(200).json({ success: true, data: cycle });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
