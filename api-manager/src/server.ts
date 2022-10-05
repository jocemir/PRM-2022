
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';




//carrego as variaveis de ambiente da aplicação....

dotenv.config();


//instancio aplicação express

const app = express();

const PORT = process.env.PORT || 3300;

//Middleware
app.use(cors());


app.use('/backoffice', createProxyMiddleware({target: 'http://localhost:3301'}))

app.use('/account', createProxyMiddleware({target: 'http://localhost:3302'}))

    //Levanto a aplicação
    app.listen(PORT, () => {
        console.log(`api magager running  in port ${PORT}`);
    })
