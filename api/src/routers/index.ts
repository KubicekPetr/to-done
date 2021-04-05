import { Application } from "../../deps.ts";
import todoRouter from "./todoRouter.ts";

const initRouters = (app: Application) => {
  app.use(todoRouter.routes());
};

export default initRouters;
