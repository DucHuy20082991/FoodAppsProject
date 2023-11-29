const Drink = [
  {
    id: '1',
    image: require('../images/nuocngot.jpg'),
    title: 'Nước ngọt ',
    weight: '500 ml',
    rating: '5.0',
    price: 150.0,
    sizeName: 'Loại 1',
    sizeNumber: 14,
    crust: 'Vừa',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'Nước',
        image: require('../images/nuoc.png'),
      },
      {
        id: '2',
        name: 'Cà chua',
        image: require('../images/orange.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/nuocchanh.jpg'),
    title: 'Nước chanh',
    weight: '200 ml',
    rating: '4.0',
    price: 96.0,
    sizeName: 'Loại 2',
    sizeNumber: 10,
    crust: 'Nhỏ',
    deliveryTime: 40,
    ingredients: [
      {
        id: '1',
        name: 'Nước ',
        image: require('../images/nuoc.png'),
      },
      {
        id: '2',
        name: 'Chanh',
        image: require('../images/lemon.png'),
      },
    ],
  },
];

export default Drink;
