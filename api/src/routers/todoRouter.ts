import { Router } from "../../deps.ts";
import type { RouterOptions } from '../../deps.ts';
import {
  get as getTodo,
  getAll as getAllTodos,
  post as postTodo,
  remove as removeTodo,
  update as updateTodo,
} from "../controllers/todoController.ts";

const routerWithUrl = (url: string) => {
  const routerUrl = `${url}/todo`;
  const routerOptions: RouterOptions  = {
    prefix: routerUrl,
  };
  const router = new Router(routerOptions);
  router
    .options("/")
    .options("/:id")
    .get("/:id", getTodo)
    .get("/", getAllTodos)
    .post("/", postTodo)
    .put("/:id", updateTodo)
    .delete("/:id", removeTodo);
  
  return router;
}

export default routerWithUrl;
