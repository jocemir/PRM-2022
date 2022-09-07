
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

//carrego as variaveis de ambiente da aplaicação

dotenv.config();


//instancio aplicação express

const app = express();

const PORT = process.env.PORT || 3300;

//Middleware
app.use(cors());
app.use(express.json());

//importa as rotas
app.use('/account', routes)



    //Levanto a aplicação
    app.listen(PORT, () => {
        console.log(`Service account in port ${PORT}`);
    })
