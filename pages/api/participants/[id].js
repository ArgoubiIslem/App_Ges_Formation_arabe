import Participant from '../../../models/Participant';
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
        const participant = await Participant.findById(id);
        if (!participant) {
          return res.status(400).json({ success: false });
        }
        return res.status(200).json({ success: true, data: participant });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const participant = await Participant.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!participant) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: participant });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deleteParticipant = await Participant.deleteOne({ _id: id });
        if (!deleteParticipant) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: Participant });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
