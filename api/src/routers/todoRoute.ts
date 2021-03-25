import { Router } from "../../deps.ts";

const router = new Router();
router.get('/', (context: any) => {
    console.log('get');
    context.response.body = 'get';
});
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