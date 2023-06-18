import prismaClient from "../../prisma";



interface AlterarNomeProdutoRequest {
    id: number;
    nomeProduto: string;
  }
  
  class AlterarNomeProdutoService {
    async execute({ id, nomeProduto }: AlterarNomeProdutoRequest) {
      const produto = await prismaClient.estoque.update({
        where: {
          id,
        },
        data: {
          nomeProduto,
        },
      });
  
      return produto;
    }
  }
  
  export { AlterarNomeProdutoService };