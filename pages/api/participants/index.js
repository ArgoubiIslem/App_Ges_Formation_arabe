import Participant from '../../../models/Participant';
import dbConnect from '../../../utils/db';

dbConnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const participants = await Participant.find({});
        res.status(200).json({ success: true, data: participants });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const participant = await Participant.create(req.body);

        res.status(200).json({ success: true, data: participant });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
