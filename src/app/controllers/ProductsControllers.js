import Product from "../models/Product";

class ProductsControllers {
  async index(req, res) {
    if (req.query.name) {
      const products = await Product.findAll({
        where: {
          name: req.query.name,
        },
      });
      return res.status(200).json(products);
    }

    const products = await Product.findAll({});
    return res.json(products);
  }

  async find(req, res) {
    const product = await Product.findByPk(req.params.id);
    return res.json(product);
  }

  async create(req, res) {
    const { name, price } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ sucess: false, error: '"name" is a required' });
    }
    if (price < 0) {
      return res
        .status(400)
        .json({ sucess: false, error: "The price cannot be a negative value" });
    }

    const newProduct = await Product.create({ name, price });
    return res.status(201).json(newProduct);
  }

  async update(req, res) {
    const nUpadted = await Product.update(req.params.id);
    return res.json({ sucess: true, nUpadted });
  }

  async delete(req, res) {
    const nDeleted = await Product.destroy(req.params.id);
    return res.json({ sucess: true, nDeleted });
  }
}

export default new ProductsControllers();
