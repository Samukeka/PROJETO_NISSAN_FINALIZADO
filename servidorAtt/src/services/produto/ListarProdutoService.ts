import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ListarProdutoService {
  async execute() {
    try {
      const ListarProdutos = await prisma.estoque.findMany();
      return ListarProdutos;
    } catch (error) {
      console.error('Erro ao buscar ListarProdutos:', error);
      throw error;
    }
  }
}