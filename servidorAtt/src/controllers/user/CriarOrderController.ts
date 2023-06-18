import { Request, Response } from 'express';
import { CriarPedidoService } from '../../services/pedido/CriarPedidoService';

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { productId, productName, productPrice } = req.body;

    try {
      const pedido = await new CriarPedidoService().execute({
        productId,
        productName,
        productPrice
      })

      res.status(201).json(pedido);
    } catch (error) {
      console.error('Ocorreu um erro ao criar o pedido:', error);
      res.status(500).json({ error: 'Erro ao criar pedido' });
    }
  }
}

export { CreateOrderController };