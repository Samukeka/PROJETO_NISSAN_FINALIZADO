import prismaClient from "../../prisma";

interface AuthRequest {
    email: string;
    password: string;
   }

class AuthUserService {
    
    async execute({ email, password }: AuthRequest) {
        
        //verificar se email existe
        const user = await prismaClient.user.findFirst({
        where:{
        email:email
        }
        })
        if (!user){
        throw new Error("User/PassWord Invalido")
        }
        //verificar validade password
       
        if (user.password!==password){
        throw new Error("User/PassWord Invalido.") 
    }
    //return { ok: "Chamada serviço Auth" }
    return {
        success: true,
    nomeUsuario:user.name
    }
    }
    
   } 

   export{AuthUserService}