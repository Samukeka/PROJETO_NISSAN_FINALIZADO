import { Request, Response } from "express";
import { ConsultarProdutoService } from "../../services/produto/ConsultarProdutoService";

class ConsultarProdutosController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const produto = await new ConsultarProdutoService().execute({ productId: Number(id) });
      res.status(200).json(produto);
    } catch (error) {
      console.error("Ocorreu um erro ao Consultar os produtos:", error);
      res.status(500).json({ error: "Erro ao Consultar produtos" });
    }
  }
}

export { ConsultarProdutosController };