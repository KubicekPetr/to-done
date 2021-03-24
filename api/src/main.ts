import { Application } from '../deps.ts';

const app = new Application();
const URL = Deno.env.get('URL') || 'http://localhost';
const PORT = Deno.env.get('PORT') || 3001;

app.addEventListener("listen", () => {
    console.log(`Server is listening at ${URL}:${PORT}`);
})