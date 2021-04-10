import { Application } from "../deps.ts";
import initRouters from "./routers/index.ts";
import notFound from "./middlewares/notFound.ts";

async function onSignal(signal: number, callback: () => void) {
  for await (const _ of Deno.signal(signal)) {
    callback();
  }
}

const abortController  = new AbortController();
const signal: AbortSignal = abortController.signal;
onSignal(Deno.Signal.SIGINT, () => { abortController.abort(); });
onSignal(Deno.Signal.SIGTERM, () => { abortController.abort(); });
onSignal(Deno.Signal.SIGQUIT, () => { abortController.abort(); });


const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);

const app = new Application();

// middlewares
initRouters(app);
app.use(notFound);

app.addEventListener("listen", () => {
  console.log(`Server is listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT, signal });
