import { Router } from "../../deps.ts";
import {
  get as getOrder,
  update as updateOrder,
} from "../controllers/todoOrderController.ts";

const router = new Router();
router
  .get("/", getOrder)
  .put("/:id", updateOrder)

export default router;
