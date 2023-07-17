import Cycle from '../../../models/Cycle';
import dbConnect from '../../../utils/db';

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
        const cycle = await Cycle.findById(id);
        if (!cycle) {
          return res.status(400).json({ success: false });
        }
        return res.status(200).json({ success: true, data: cycle });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const cycle = await Cycle.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!cycle) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: cycle });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deleteCycle = await Cycle.deleteOne({ _id: id });
        if (!deleteCycle) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: Cycle });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
