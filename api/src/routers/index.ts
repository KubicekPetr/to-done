import { Application } from "../../deps.ts";
import todoRouter from "./todoRouter.ts";

const apiVersion = Deno.env.get('API_VERSION');
const apiUrl = `/api/${apiVersion}`;

const initRouters = (app: Application) => {
  app.use(todoRouter(apiUrl).routes());
};

export default initRouters;
