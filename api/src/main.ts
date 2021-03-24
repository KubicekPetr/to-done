import { Application, Router } from "../deps.ts";

const app = new Application();

const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);

const router = new Router();

router.get("/", (context: any) => {
  context.response.body = "Hello from Oak";
});

app.use(router.routes());

app.addEventListener("listen", () => {
  console.log(`Server is listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT });
