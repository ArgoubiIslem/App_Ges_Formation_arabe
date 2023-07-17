import Formateur from '../../../models/Formateur';
import dbConnect from '../../../utils/db';
import { getStaticPaths } from 'next';
dbConnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const formateurs = await Formateur.find({});
        res.status(200).json({ success: true, data: formateurs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const formateur = await Formateur.create(req.body);

        res.status(200).json({ success: true, data: formateur });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
