import prismaClient from "../../prisma";

interface CriarPedidoRequestDTO {
  productId: number;
  productName: string;
  productPrice: number;
}

class CriarPedidoService {
  async execute({ productId, productName, productPrice }: CriarPedidoRequestDTO) {

    await prismaClient.estoque.update({
      where: {
        id: productId
      },
      data: {
        quantidade: {
          decrement: 1
        }
      }
    });

    const order = await prismaClient.pedido.create({
      data: {
        productName,
        productPrice
      },
    });

    return order;
  }
}

export { CriarPedidoService };
