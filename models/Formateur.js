const mongoose = require('mongoose');

const formateurSchema = new mongoose.Schema(
  {
    nomPrenom: { type: String, required: true },
    specialite: { type: String, required: true },
    direction: { type: String, required: true },
    entreprise: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Formateur =
  mongoose.models.Formateur || mongoose.model('Formateur', formateurSchema);

export default Formateur;
