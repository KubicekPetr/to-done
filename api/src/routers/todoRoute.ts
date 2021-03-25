import { Router } from "../../deps.ts";
import { get as getTodo } from '../controllers/todoController.ts';

const router = new Router();
router.get('/', getTodo);
router.post('/', (context: any) => {
    console.log('post');
    context.response.body = 'post';
});
router.put('/', (context: any) => {
    console.log('put');
    context.response.body = 'put';
});
router.delete('/', (context: any) => {
    console.log('delete');
    context.response.body = 'delete';
});

export default router;