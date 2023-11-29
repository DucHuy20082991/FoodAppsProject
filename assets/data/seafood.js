const seafood = [
  {
    id: '1',
    image: require('../images/cahoi.jpg'),
    title: 'Cá hồi ',
    weight: '540 gr',
    rating: '5.0',
    price: '150.000',
    sizeName: 'Loại 1',
    crust: 'Vừa',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'Cá hồi',
        image: require('../images/samon.png'),
      },
      {
        id: '2',
        name: 'Cà chua',
        image: require('../images/tomato.png'),
      },
      {
        id: '3',
        name: 'Ớt',
        image: require('../images/chili.png'),
      },
      {
        id: '4',
        name: 'Tỏi',
        image: require('../images/garlic.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/tom.jpg'),
    title: 'Tôm',
    weight: '450 gr',
    rating: '4.0',
    price: '96.000',
    sizeName: 'Loại 2',
    crust: 'Nhỏ',
    deliveryTime: 40,
    ingredients: [
      {
        id: '1',
        name: 'Tôm',
        image: require('../images/shrimp.png'),
      },
      {
        id: '2',
        name: 'Tỏi',
        image: require('../images/garlic.png'),
      },
      {
        id: '3',
        name: 'Ớt',
        image: require('../images/chili.png'),
      },
    ],
  },
  {
    id: '3',
    image: require('../images/hao.jpg'),
    title: 'Hào',
    weight: '700 gr',
    rating: '5.0',
    price: '90.000',
    sizeName: 'Loại 1',
    crust: 'Lớn',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'Hàu',
        image: require('../images/oyster.png'),
      },
      {
        id: '2',
        name: 'Wasabi',
        image: require('../images/mutat.png'),
      },
    ],
  },
];

export default seafood;
