import { Router } from "../../deps.ts";
import type { RouterOptions } from '../../deps.ts';
import {
  get as getOrder,
  update as updateOrder,
} from "../controllers/todoOrderController.ts";

  const routerWithUrl = (url: string) => {
    const routerUrl = `${url}/todo-order`;
    const routerOptions: RouterOptions = {
      prefix: routerUrl,
    };
    const router = new Router(routerOptions);
    router
      .options("/")
      .get("/", getOrder)
      .put("/:id", updateOrder)
    
    return router;
  }

export default routerWithUrl;
