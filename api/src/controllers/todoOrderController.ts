import type { RouterContext } from "../../deps.ts";
import { validateMongoId, validateRequest } from "../utils/validation.ts";

import { MongoRepository } from "../repository/MongoRepository.ts";

// init mongo repository over the mongoRepository CRUD ops
const mongoRepository = new MongoRepository();

export const get = async (context: RouterContext) => {
  console.log("Getting order for todos");
  let response: Object;
  try {
    const data = await mongoRepository.getTodosOrders();
    response = {
      success: true,
      length: data.length,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      error: error.toString(),
    };
  }
  context.response.body = response;
};

export const update = async (context: RouterContext) => {
  console.log("Updating order for todos");
  const body = context.request.body();
  let data = await body.value;
  let response: Object;
  try {
    if (!data) {
      throw new Error("Empty body");
    }
    // await validateRequest(data, todoSchemaUpdate);
    const result = await mongoRepository.updateTodosOrder(data);
    response = {
      success: true,
      data: result,
    };
  } catch (error) {
    response = {
      success: false,
      data: error.toString(),
    };
    context.response.status = 500;
  }
  context.response.body = response;
};
