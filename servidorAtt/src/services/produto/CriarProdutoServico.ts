import prismaClient from "../../prisma";

interface Prequest {
  nomeProduto: string;
  preco: number;

}

class CriarProdutoServico {
  async execute({ nomeProduto, preco }: Prequest) {
    const produtoJaExiste = await prismaClient.estoque.findFirst({
      where: {
        nomeProduto: nomeProduto
      },
    });

    if (produtoJaExiste) {
      throw new Error("Produto já existe");
    }

    const produto = await prismaClient.estoque.create({
      data: {
        nomeProduto: nomeProduto,
        preco: Number(preco),
      },
    });

    return produto;
  }
}

export { CriarProdutoServico };
