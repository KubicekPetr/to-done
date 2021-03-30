import { Bson, firstMessages, validate, ValidationRules } from "../../deps.ts";

const validateRequest = async (obj: Object, schema: ValidationRules) => {
  const [passes, errors] = await validate(obj, schema);
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

export { validateMongoId, validateRequest };
