import { Request, Response } from "express";
import { TypeORMError } from "typeorm";
import { Customer } from "../entity/Customer";


class CustomerController {

    public async index(request: Request, response: Response) {
        try {
            const customers = await Customer.find();

            return response.json(customers);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async create(request: Request, response: Response) {
        try {
            const customer = await Customer.save(request.body);

            return response.status(201).json(customer);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async show(request: Request, response: Response) {
        try {
            const {id} = request.params;

            if (!id) {
                return response.status(400).json({message: 'ID não informado'})
            }

            const found = await Customer.findOneBy({
                id: Number(id)
            });

            if (!found) {
                return response.status(404).json({message: 'Não encontrado'})
            }

            return response.json(found);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const {id} = request.params;

            if (!id) {
                return response.status(400).json({message: 'ID não informado'})
            }

            const found = await Customer.findOneBy({
                id: Number(id)
            });

            if (!found) {
                return response.status(404).json({message: 'Não encontrado'})
            }

            await Customer.update(found.id, request.body);

            const novo = request.body;

            novo.id = found.id;

            return response.json(novo);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async remove(request: Request, response: Response) {
        try {
            const {id} = request.params;

            if (!id) {
                return response.status(400).json({message: 'ID não informado'})
            }

            const found = await Customer.findOneBy({
                id: Number(id)
            });

            if (!found) {
                return response.status(404).json({message: 'Não encontrado'})
            }

            await found.remove();

            return response.status(204).json();
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

}

export default new CustomerController();