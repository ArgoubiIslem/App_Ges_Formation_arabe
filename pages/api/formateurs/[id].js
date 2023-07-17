import Formateur from '../../../models/Formateur';
import dbConnect from '../../../utils/db';
import { getStaticPaths } from 'next';
dbConnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const formateur = await Formateur.findById(id);
        if (!formateur) {
          return res.status(400).json({ success: false });
        }
        return res.status(200).json({ success: true, data: formateur });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const formateur = await Formateur.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!formateur) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: formateur });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deleteFormateur = await Formateur.deleteOne({ _id: id });
        if (!deleteFormateur) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: Formateur });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
