import { Application, oakCors } from "../deps.ts";
import initRouters from "./routers/index.ts";
import notFound from "./middlewares/notFound.ts";
import { signal, startListeningForTerminationSignal } from './utils/signalManager.ts';

const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);

startListeningForTerminationSignal();
const app = new Application();

const allowedOrigins = oakCors({ origin: "http://localhost:3000" });
app.use(allowedOrigins);

// middlewares
initRouters(app);
app.use(notFound);

app.addEventListener("listen", () => {
  console.log(`Server is listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT, signal });
