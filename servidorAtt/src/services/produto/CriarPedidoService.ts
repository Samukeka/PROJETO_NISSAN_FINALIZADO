import prismaClient from "../../prisma";

interface pedidoRequest{
    productId: number;
}

export class CriarPedidoService{
    async execute({ productId }: pedidoRequest){
        const id = await prismaClient.estoque.findUnique({
            where: {
                id: productId
            }
        })

        console.log(id)
    }
}