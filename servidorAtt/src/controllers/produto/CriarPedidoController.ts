import { Request, Response } from "express";
import { CriarPedidoService } from "../../services/produto/CriarPedidoservice";

class CriarPedidoController {

    async handle(req: Request, res: Response) {
        const { productId } = req.body;

        const criarPedidoservice = new CriarPedidoService();
        const id = await criarPedidoservice.execute({
            productId
        });
        return res.status(201).json({
            message: 'Pedido criado com sucesso.'
        });
    }
}
export { CriarPedidoController };