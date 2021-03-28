import todoRouter from "./todoRouter.ts";

const initRouters = (app: any) => {
  app.use(todoRouter.routes());
};

export default initRouters;
