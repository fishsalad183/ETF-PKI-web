const images = require.context('./images', true, /\.png$/);

const data = {
  products: [
    {
      id: 1,
      title: 'Bagremov med',
      description: '...',
      src: images('./proizvod_bagremov_med.png'),
    },
    {
      id: 2,
      title: 'Lipov med',
      description: '...',
      src: images('./proizvod_lipov_med.png'),
    },
    {
      id: 3,
      title: 'Livadski med',
      description: '...',
      src: images('./proizvod_livadski_med.png'),
    },
    {
      id: 4,
      title: 'Medovača',
      description: '...',
      src: images('./proizvod_medovaca.png'),
    },
    {
      id: 5,
      title: 'Mleč',
      description: '...',
      src: images('./proizvod_mlec_med.png'),
    },
    {
      id: 6,
      title: 'Šumski med',
      description: '...',
      src: images('./proizvod_sumski_med.png'),
    },
  ],
  users: [
    {
      id: 1,
      name: 'Petar',
      lastName: 'Petrović',
      phone: '0123456789',
      address: 'Njegoseva 42',
      type: 'customer',
      username: 'user123',
      password: 'pass123',
    },
    {
      id: 1,
      name: 'Jovan',
      lastName: 'Jovanović',
      phone: '9876543210',
      address: 'Neka ulica 123',
      type: 'salesman',
      username: 'user123',
      password: 'pass123',
    },
  ],
};
export default data;
