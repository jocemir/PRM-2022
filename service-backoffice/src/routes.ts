import { Router } from "express";

import BrandController from "./controller/BrandController";
import CategoryController from "./controller/CategoryController";
import ProductController from "./controller/ProductController";


//instancio o router do express

const routes = Router();


//rotas da brand

routes.route('/brands')
    .get(BrandController.index)
    .post(BrandController.create);

routes.route('/brands/:id')
    .get(BrandController.show)
    .put(BrandController.update)
    .delete(BrandController.remove);


//rotas da category
routes.route('/categories')
    .get(CategoryController.index)
    .post(CategoryController.create);

routes.route('/categories/:id')
    .get(CategoryController.show)
    .put(CategoryController.update)
    .delete(CategoryController.remove);

//rotas do product
routes.route('/products')
    .get(ProductController.index)
    .post(ProductController.create);

routes.route('/products/:id')
    .get(ProductController.show)
    .put(ProductController.update)
    .delete(ProductController.remove);




export default routes;

