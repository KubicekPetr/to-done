import { Router } from "../../deps.ts";
import {
  get as getTodo,
  getAll as getAllTodos,
  post as postTodo,
  remove as removeTodo,
  update as updateTodo,
} from "../controllers/todoController.ts";

const router = new Router();
router
  .get("/:id", getTodo)
  .get("/", getAllTodos)
  .post("/", postTodo)
  .put("/", updateTodo)
  .delete("/", removeTodo);

export default router;