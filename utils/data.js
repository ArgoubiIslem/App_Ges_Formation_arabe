import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      nomP: 'amal',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      nomP: 'islem',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: false,
    },
  ],
  formateurs: [
    {
      nomPrenom: 'nomprenom test',
      specialite: 'specialite test',
      direction: 'direction test',
      entreprise: 'entreprise test',
    },
    {
      nomPrenom: 'nomprenom test 2',
      specialite: 'specialite test 2',
      direction: 'direction test 2',
      entreprise: 'entreprise test 2',
    },
  ],
  cycles: [
    {
      nom: 'Photoshope ui/ux',
      image: 'TEst.jpg',
      prix: 230,
      description: 'formation test test test test',
      formateurun: 'ali',
      formateurdeux: 'amal',
      formateurtrois: 'islem',
      dateDebut: new Date('2023-07-23'),
      dateFin: new Date('2023-07-23'),
      salle: 23,
    },
    {
      nom: 'Photoshope ui/ux',
      image: 'TEst.jpg',
      prix: 230,
      description: 'formation test test test test',
      formateurun: 'ali',
      formateurdeux: 'amal',
      formateurtrois: 'islem',
      dateDebut: new Date('2023-07-23'),
      dateFin: new Date('2023-07-23'),
      salle: 23,
    },
  ],
};
export default data;
