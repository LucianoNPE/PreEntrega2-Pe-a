const products = [
  {
    id: "1",
    name: "Buzo Canguro",
    price: 8600,
    category: "Buzos",
    img: "../images/BuzoCanguro.png",
    stock: 25,
    description: "Desde S hasta XXL",
  },
  {
    id: "2",
    name: "Buzo Cuello Redondo",
    price: 5500,
    category: "Buzos",
    img: "../images/BuzoCuelloRedondo.png",
    stock: 20,
    description: "Desde S hasta XXL",
  },
  {
    id: "3",
    name: "Jogging Frizado",
    price: 5300,
    category: "Pantalones",
    img: "../images/Jogging.png",
    stock: 15,
    description: "Desde 38 a 46",
  },
];

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
