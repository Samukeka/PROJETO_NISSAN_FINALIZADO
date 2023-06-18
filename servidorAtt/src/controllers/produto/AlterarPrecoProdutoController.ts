import { Request, Response } from "express";
import { AlterarPrecoProdutoService } from "../../services/produto/AlterarPrecoProdutoService";

class AlterarPrecoProdutoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { preco } = req.body;

    const alterarPrecoProdutoService = new AlterarPrecoProdutoService();

    const produto = await alterarPrecoProdutoService.execute({
      id: parseInt(id, 10),
      preco: parseFloat(preco),
    });

    return res.json(produto);
  }
}

export { AlterarPrecoProdutoController };