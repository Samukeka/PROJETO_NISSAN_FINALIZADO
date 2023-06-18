import { Request, Response } from "express";
import { ListarProdutoService } from '../../services/produto/ListarProdutoService'

export class ListarProdutosController {
  async handle(req: Request, res: Response) {
    try {
      const produtos = await new ListarProdutoService().execute();
      res.json(produtos);
    } catch (error) {
      console.error("Ocorreu um erro ao listar os produtos:", error);
      res.status(500).json({ error: "Erro ao listar produtos" });
    }
  }
}
