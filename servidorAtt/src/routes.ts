import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './services/user/AuthUserController';
import { CriarProdutoController } from './controllers/produto/CriarProdutoController';
import { DeletarProdutoController } from './controllers/produto/DeletarProdutoController';
import { AlterarProdutoController } from './controllers/produto/AlterarProdutoController';
import { ListarProdutosController } from './controllers/produto/ListarProdutosController'; 
import { AlterarPrecoProdutoController } from './controllers/produto/AlterarPrecoProdutoController';
import { ConsultarProdutosController } from './controllers/produto/ConsultarProdutoController';
import { CreateOrderController } from './controllers/user/CriarOrderController';
const router = Router();



router.post('/users',new CreateUserController().handle) 
router.post('/session',new AuthUserController().handle);
router.post('/produto', new CriarProdutoController().handle);
router.delete('/deletar', new DeletarProdutoController().handle);
router.put('/produto/:id',new AlterarProdutoController().handle);
router.get('/produto/:id',new ConsultarProdutosController().handle);
router.get("/produtos", new ListarProdutosController().handle);
router.post('/order', new CreateOrderController().handle);
router.put('/produto/:id/preco', new AlterarPrecoProdutoController().handle);




export { router };