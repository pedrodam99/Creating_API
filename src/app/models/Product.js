import { config } from "dotenv";

//DAQUI PARA BAIXO É TUDO MOCK
const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Arroz 1kg X",
    price: 5.7,
  },
  {
    id: "2",
    name: "Feijao 1kg Y",
    price: 10.7,
  },
  {
    id: "3",
    name: "Danoninho 12 unidades",
    price: 15,
  },
];

function findAll() {
  return MOCK_PRODUCTS;
}

function findProductById(id) {
  const product = MOCK_PRODUCTS.find((product) => product.id == id);
  return product;
}

function createProduct(product) {
  const newProduct = {
    id: MOCK_PRODUCTS.length.toString(),
    ...product,
  };
  MOCK_PRODUCTS.push(newProduct);
  return newProduct;
}
//DAQUI PARA CIMA É TUDO MOCK

class Product {
  async findAll(configs) {
    if (configs && configs.where) {
      return MOCK_PRODUCTS.filter((product) =>
        product.name.includes(configs.where.name)
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return MOCK_PRODUCTS;
  }

  async findByPk(id) {
    const product = MOCK_PRODUCTS.find((product) => product.id == id);
    return product;
  }

  async create(product) {
    const newProduct = {
      id: MOCK_PRODUCTS.length.toString(),
      ...product,
    };
    MOCK_PRODUCTS.push(newProduct);
    return newProduct;
  }
  async update() {
    return 1;
  }
  async destroy() {
    return 1;
  }
}

export default new Product();
