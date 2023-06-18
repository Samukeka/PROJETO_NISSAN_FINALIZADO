import { Request, response, Response } from "express";
import { AlterarNomeProdutoService } from "../../services/produto/AlterarNomeProdutoService ";
class AlterarProdutoController{
    async handle(req: Request, res: Response) {
      const { id } = req.params;
      const { nomeProduto } = req.body;
  
      const alterarNomeProdutoService = new AlterarNomeProdutoService();
  
      const produto = await alterarNomeProdutoService.execute({
        id: parseInt(id, 10),
        nomeProduto,
      });
  
      return res.json(produto);
    }
  }
  
  export { AlterarProdutoController };