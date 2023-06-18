import { Request, response, Response } from "express";
import { DeletarProdutoServico } from "../../services/produto/DeletarProdutoServico";

class DeletarProdutoController{
    async handle(req: Request, res: Response){
        const{id} = req.body
        
        const deletarProdutoServico = new DeletarProdutoServico();
        const idProduto = await deletarProdutoServico.execute({
            id
        });
        return res.json(idProduto);

    }


}
export{DeletarProdutoController}