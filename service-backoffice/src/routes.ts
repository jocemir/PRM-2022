import { Router } from "express";

import BrandController from "./controller/BrandController";
import CategoryController from "./controller/CategoryController";
import CidadeController from "./controller/CidadeController";
import CustomerController from "./controller/CustomerController";
import EstadoController from "./controller/EstadoController";
import OrderController from "./controller/OrderController";

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

    //rotas da cidade
routes.route('/cidade')
.get(CidadeController.index)
.post(CidadeController.create);

routes.route('/cidade/:id')
    .get(CidadeController.show)
    .put(CidadeController.update)
    .delete(CidadeController.remove);

//rotas do estado

routes.route('/estado')
    .get(EstadoController.index)
    .post(EstadoController.create);

routes.route('/estado/:id')
    .get(EstadoController.show)
    .put(EstadoController.update)
    .delete(EstadoController.remove);

    //rota customers

    routes.route('/customers')
    .get(CustomerController.index)
    .post(CustomerController.create);

routes.route('/customers/:id')
    .get(CustomerController.show)
    .put(CustomerController.update)
    .delete(CustomerController.remove);

routes.route('/orders')
    .get(OrderController.index)
    .post(OrderController.create);

routes.route('/orders/:id')
    .get(OrderController.show)
    .put(OrderController.cancel)

export default routes;

