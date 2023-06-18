import prismaClient from "../../prisma";

interface AlterarPrecoProdutoRequest {
  id: number;
  preco: number;
}

class AlterarPrecoProdutoService {
  async execute({ id, preco }: AlterarPrecoProdutoRequest) {
    const produto = await prismaClient.estoque.update({
      where: {
        id,
      },
      data: {
        preco,
      },
    });

    return produto;
  }
}

export { AlterarPrecoProdutoService };