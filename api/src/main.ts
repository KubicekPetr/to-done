import { Application } from "../deps.ts";
import initRouters from "./routers/index.ts";
import notFound from "./middlewares/notFound.ts";

async function onSignal(signal: number, callback: () => void) {
  for await (const _ of Deno.signal(signal)) {
    callback();
  }
}

onSignal(Deno.Signal.SIGINT, () => { console.log("SIGINT") });
onSignal(Deno.Signal.SIGTERM, () => { console.log("SIGTERM") });
onSignal(Deno.Signal.SIGQUIT, () => { console.log("SIGQUIT") });


const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);

const app = new Application();

// middlewares
initRouters(app);
app.use(notFound);

app.addEventListener("listen", () => {
  console.log(`Server is listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT });
