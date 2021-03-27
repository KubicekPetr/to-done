import { Router } from "../../deps.ts";
import {
  get as getTodo,
  post as postTodo,
} from "../controllers/todoController.ts";

const router = new Router();
router.get("/", getTodo);
router.post("/", postTodo);
router.put("/", (context: any) => {
  console.log("put");
  context.response.body = "put";
});
router.delete("/", (context: any) => {
  console.log("delete");
  context.response.body = "delete";
});

export default router;
