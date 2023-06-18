import prismaClient from "../../prisma";

interface pedidoRequest{
    productId: number;
}

export class ConsultarProdutoService{
    async execute({ productId }: pedidoRequest){
        const id = await prismaClient.estoque.findUnique({
            where: {
                id: productId
            }
        })

        return id;
    }
}