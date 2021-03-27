import { FirstMessages, validate } from "../../deps.ts";
import { todoSchema } from "../models/todoModel.ts";

const validateTodo = async (todo: Object) => {
  const [passes, errors] = await validate(todo, todoSchema);
  if (!passes) {
    throw FirstMessages(errors);
  }
  return true;
};