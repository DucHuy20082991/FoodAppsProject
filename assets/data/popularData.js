const popularData = [
    {
      id: '1',
      image: require('../images/pizza1.png'),
      title: 'Primavera Pizza',
      weight: '540 gr',
      rating: '5.0',
      price: 3.99,
      sizeName: 'Vừa',
      sizeNumber: 14,
      crust: 'Đế mỏng giòn',
      deliveryTime: 30,
      ingredients: [
        {
          id: '1',
          name: 'Thịt xông khói',
          image: require('../images/ham.png'),
        },
        {
          id: '2',
          name: 'Cà chua',
          image: require('../images/tomato.png'),
        },
        {
          id: '3',
          name: 'Phô mai',
          image: require('../images/cheese.png'),
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
      image: require('../images/pizza2.png'),
      title: 'Vegetarian Pizza',
      weight: '450 gr',
      rating: '4.0',
      price: 5.99,
      sizeName: 'Nhỏ',
      sizeNumber: 10,
      crust: 'Đế dày xốp',
      deliveryTime: 40,
      ingredients: [
        {
          id: '1',
          name: 'Phô mai',
          image: require('../images/cheese.png'),
        },
        {
          id: '2',
          name: 'Tỏi',
          image: require('../images/garlic.png'),
        },
      ],
    },
    {
      id: '3',
      image: require('../images/pizza3.png'),
      title: 'Pepperoni Pizza',
      weight: '700 gr',
      rating: '5.0',
      price: 9.99,
      sizeName: 'Lớn',
      sizeNumber: 18,
      crust: 'Đế vừa',
      deliveryTime: 20,
      ingredients: [
        {
          id: '1',
          name: 'Cà chua',
          image: require('../images/tomato.png'),
        },
        {
          id: '2',
          name: 'Phô mai',
          image: require('../images/cheese.png'),
        },
      ],
    },
  ];
  
  export default popularData;
  