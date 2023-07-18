const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema(
  {
    nomPrenom: { type: String, required: true },
    entreprise: { type: String, required: true },
    fix: { type: Number, required: true },
    fax: { type: Number, required: true },
    tel: { type: Number, required: true },
    mail: { type: String, required: true },
    cycle: { type: String, required: true },
    salle: { type: Number, required: true },
    dateDebut: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Participant =
  mongoose.models.Participant ||
  mongoose.model('Participant', participantSchema);

export default Participant;
