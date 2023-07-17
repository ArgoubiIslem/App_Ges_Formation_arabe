const mongoose = require('mongoose');

const cycleSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  image: { type: String, required: true },
  prix: { type: Number, required: true, default: 0 },
  description: { type: String, required: true },
  formateurun: { type: String, required: true },
  formateurdeux: { type: String, required: true },
  formateurtrois: { type: String, required: true },
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: true },
  salle: { type: Number, required: true, default: 0 },
});

const Cycle = mongoose.models.Cycle || mongoose.model('Cycle', cycleSchema);

export default Cycle;
