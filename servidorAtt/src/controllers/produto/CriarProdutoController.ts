import { Request, response, Response } from "express";
import {CriarProdutoServico } from "../../services/produto/CriarProdutoServico";



class CriarProdutoController{

    async handle(req: Request, res: Response){
        const {nomeProduto, preco} = req.body
        
        const criarProdutoServico = new CriarProdutoServico();
        const produto = await criarProdutoServico.execute({
            nomeProduto, preco
        });

        return res.json(produto);
    }
}
export {CriarProdutoController}