import {Router} from 'express';
import AuthController from './Controller/AuthController';

const routes = Router();

routes.post('/admin/signin', AuthController.signInAdmin);

//Deixando pública a rota para a aplicação
export default routes;