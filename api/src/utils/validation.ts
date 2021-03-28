import { firstMessages, validate } from "../../deps.ts";
import { todoSchema } from "../models/todoModel.ts";

const validateTodo = async (todo: Object) => {
  const [passes, errors] = await validate(todo, todoSchema);
  if (!passes) {
    throw firstMessages(errors);
  }
  return true;
};

export { validateTodo };
