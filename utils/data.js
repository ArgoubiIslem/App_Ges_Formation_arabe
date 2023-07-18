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
      image:
        'https://www.cerfi.ch/Htdocs/Images/Pictures/puid_e2ad9412-cca4-4eaf-961c-570cf0f342eb_3354.jpg',
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
      image:
        'https://www.cerfi.ch/Htdocs/Images/Pictures/puid_e2ad9412-cca4-4eaf-961c-570cf0f342eb_3354.jpg',
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
  participants: [
    {
      nomPrenom: 'Islem Argoubi',
      entreprise: ' cni',
      fix: 71234769,
      fax: 71234769,
      tel: 22234769,
      mail: 'argoubiislem@gmail.com',
      cycle: 'Photoshope',
      salle: 12,
      dateDebut: new Date('2023-07-23'),
    },
    {
      nomPrenom: 'Islem Argoubi',
      entreprise: ' cni',
      fix: 71234769,
      fax: 71234769,
      tel: 22234769,
      mail: 'argoubiislem@gmail.com',
      cycle: 'Photoshope',
      salle: 12,
      dateDebut: new Date('2023-07-23'),
    },
  ],
};
export default data;
