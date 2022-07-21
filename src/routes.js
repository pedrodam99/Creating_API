import { Router } from "express";

import ProductsControllers from "./app/controllers/ProductsControllers";
import UsersControllers from "./app/controllers/UsersControllers";

const routes = new Router();

routes.use((req, res, next) => {
  const { query } = req;
  console.info({ query });
  next();
});

routes.get("/products", ProductsControllers.index);
routes.get("/products/:id", ProductsControllers.find);
routes.post("/products", ProductsControllers.create);
routes.put("/products/:id", ProductsControllers.update);
routes.delete("/products/:id", ProductsControllers.delete);

routes.get("/users", UsersControllers.index);
routes.get("/users/:id", UsersControllers.find);

export default routes;
