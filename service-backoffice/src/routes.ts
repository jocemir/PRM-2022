import { Router } from 'express';
import BrandController from './controller/BrandController';
import CategoryController from './controller/CategoryController';
import CustomerController from './controller/CustomerController';
import OrderController from './controller/OrderController';
import ProductController from './controller/ProductController';

//Instancio o reouter do express
const routes = Router();

//Rotas da Brand
routes.route('/brands')
    .get(BrandController.index)
    .post(BrandController.create);

routes.route('/brands/:id')
    .get(BrandController.show)
    .put(BrandController.update)
    .delete(BrandController.remove);


//Rotas da Category
routes.route('/categories')
    .get(CategoryController.index)
    .post(CategoryController.create);

routes.route('/categories/:id')
    .get(CategoryController.show)
    .put(CategoryController.update)
    .delete(CategoryController.remove);


//Rotas da Product
routes.route('/products')
    .get(ProductController.index)
    .post(ProductController.create);

routes.route('/products/:id')
    .get(ProductController.show)
    .put(ProductController.update)
    .delete(ProductController.remove);


//Rotas da Customer
routes.route('/customers')
    .get(CustomerController.index)
    .post(CustomerController.create);

routes.route('/customers/:id')
    .get(CustomerController.show)
    .put(CustomerController.update)
    .delete(CustomerController.remove);


//Rotas da Order
routes.route('/order')
    .get(OrderController.index)
    .post(OrderController.create);

routes.route('/order/:id')
    .get(OrderController.show)
    .put(OrderController.canceled);

export default routes;