import { Bson, firstMessages, validate } from "../../deps.ts";
import { todoSchema } from "../models/todoModel.ts";

const validateTodo = async (todo: Object) => {
  const [passes, errors] = await validate(todo, todoSchema);
  if (!passes) {
    throw firstMessages(errors);
  }
  return true;
};

const validateMongoId = (id: string) => {
  if (!Bson.ObjectId.isValid(id)) {
    throw new Error("Invalid mongo id");
  }
  return true;
};

export { validateMongoId, validateTodo };
