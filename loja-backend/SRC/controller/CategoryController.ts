import { Category } from './../entity/Category';
import{ Request, Response } from "express";
import { TypeORMError } from "typeorm";


class CategoryController{

    //Método lista ou index
    public async index (request: Request, response: Response){
        try {
            //buscasr todos os registros do banco
            const categories = await Category.find();

            //retorno a lista

            return response.json(categories);
            
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message})
        }

    }

    //Método Criar marca
    public async create (request: Request, response: Response){
        try {
            //salvo no banco a entidade que veio da requisição
            const category = await Category.save(request.body);

            //retorno a entidade inserida

            return response.json(category);
            
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message})
        }

    }

    //Método mostrar
    public async show (request: Request, response: Response){
        try {
            //pego o id que foi enviado por parametro ou request param

            const {id} = request.params;

            //verifico se veio o parametro id

            if(!id){
                return response.status(400).json({message:'Parâmetro ID não informado'});
            }

            //busca a entidade pelo id

            const found = await Category.findOneBy({
                id:Number(id)
            });

            //retorno a entidade inserida
            if(!found)
            {
                return response.status(404).json({message:'Recurso não encontrado'});
            }

            return response.json(found);
            
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message})
        }

    }

    //Método update
    public async update (request: Request, response: Response){
        try {
            //pego o id que foi enviado por parametro ou request param

            const {id} = request.params;

            //verifico se veio o parametro id

            if(!id){
                return response.status(400).json({message:'Parâmetro ID não informado'});
            }

            //busca a entidade pelo id

            const found = await Category.findOneBy({
                id:Number(id)
            });

            //verifica se encontrou a category
            if(!found)
            {
                return response.status(404).json({message:'Recurso não encontrado'});
            }

            //atualiso com novos dados

            await Category.update(found.id, request.body)

            const novo = request.body;


            //retona a entidade encontradas

            return response.json(novo);
            
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message})
        }

    }

    //Método remover
    public async remove (request: Request, response: Response){
        try {
            //pego o id que foi enviado por parametro ou request param

            const {id} = request.params;

            //verifico se veio o parametro id

            if(!id){
                return response.status(400).json({message:'Parâmetro ID não informado'});
            }

            //busca a entidade pelo id

            const found = await Category.findOneBy({
                id:Number(id)
            });

            if(!found)
            {
                return response.status(404).json({message:'Recurso não encontrado'});
            }
            
            //removo o registro baseado no id

            await found.remove();

            //retono status 204 que é sem retorno

            return response.status(204).json();

            //retorno a entidade inserida
            

            return response.json(found);
            
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message})
        }

    }

}

export default new CategoryController();
