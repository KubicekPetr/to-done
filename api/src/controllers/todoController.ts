import type { RouterContext } from "../../deps.ts";
import { validateMongoId, validateRequest } from "../utils/validation.ts";
import {
  ITodo,
  ITodoUpdate,
  todoSchema,
  todoSchemaUpdate,
} from "../models/todoModel.ts";
import { MongoRepository } from "../repository/MongoRepository.ts";

// init mongo repository over the todoCollection CRUD ops
const todoCollection = new MongoRepository();

export const getAll = async (context: RouterContext) => {
  console.log("Getting all todos");
  let response: Object;
  try {
    const data = await todoCollection.findMany();
    response = {
      success: true,
      length: data.length,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      length: 0,
      error: error.toString(),
    };
    context.response.status = 500;
  }
  context.response.body = response;
};

export const get = async (context: RouterContext) => {
  const id = context.params.id!;
  console.log(`Getting the todo with id ${id}`);
  let response: Object;
  try {
    validateMongoId(id);
    const data = await todoCollection.findOne(id);
    if (!data) {
      throw new Error("A todo does not exist");
    }
    response = {
      success: true,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      error: error.toString(),
    };
    if (error.message.includes("not exist")) {
      context.response.status = 404;
    } else {
      context.response.status = 500;
    }
  }
  context.response.body = response;
};

export const post = async (context: RouterContext) => {
  const body = context.request.body();
  const data: ITodo = await body.value;
  let response: Object;
  try {
    await validateRequest(data, todoSchema);
    await todoCollection.insertOne(data);
    response = {
      success: true,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      error: error.toString(),
    };
    context.response.status = 500;
  }
  context.response.body = response;
};

export const update = async (context: RouterContext) => {
  const id: string = context.params.id!;
  console.log(`Updating the todo with id ${id}`);
  const body = context.request.body();
  let data: ITodoUpdate = await body.value;
  let response: Object;
  try {
    if (!data) {
      throw new Error("Empty body");
    }
    validateMongoId(id);
    await validateRequest(data, todoSchemaUpdate);
    const result = await todoCollection.updateOne(id, data);
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

export const remove = async (context: RouterContext) => {
  const id: string = context.params.id!;
  console.log(`Deleting the todo with id ${id}`);
  let response: Object;
  try {
    validateMongoId(id);
    const data = await todoCollection.deleteOne(id);
    if (!data) {
      throw new Error("A todo does not exist, it can't be deleted");
    }
    response = {
      success: true,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      error: error.toString(),
    };
    if (error.message.includes("not exist")) {
      context.response.status = 404;
    } else {
      context.response.status = 500;
    }
  }
  context.response.body = response;
};
