import prismaClient from "../../prisma";

interface Deleterequest {
  id: number;
}

class DeletarProdutoServico {
  async execute({ id }: Deleterequest) {
    const idProduto = await prismaClient.estoque.delete({
      where: {
        id: id,
      },
    });

    return idProduto;
  }
}

export { DeletarProdutoServico };