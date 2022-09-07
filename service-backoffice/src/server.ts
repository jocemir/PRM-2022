import { AppDataSource } from './data-source';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import { env } from 'process';

//instancio aplicação express

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3301;

//Middleware
app.use(cors());
app.use(express.json());

//importa as rotas
app.use('/server',routes)

//Se conectar no banco de dados, levanto a aplicação
AppDataSource.initialize().then(() => {

    //Levanto a aplicação
    app.listen(PORT, () => {
        console.log(`service backoffice running in port ${PORT}`);
    })

}).catch(error => {
    console.log('Ops, não conectei no banco de dados', error);
});