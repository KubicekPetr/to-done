import {
  isBool,
  isDate,
  isString,
  lengthBetween,
  nullable,
  required,
  Bson,
} from "../../deps.ts";

import { optionalStringLength } from "./rules/optionalStringLength.ts";

interface ITodo {
  _id: Bson.Document;
  name: string;
  title: string;
  description?: string;
  done: boolean;
  color?: string;
  endAt?: Date;
  createdAt: Date;
  updatedAt?: Date;
}

const todoSchema = {
  name: [lengthBetween(1, 100), isString, required],
  title: [lengthBetween(1, 100), isString, required],
  description: [isString, nullable],
  done: [isBool, required],
  color: [isString, nullable],
  endAt: [isDate, nullable],
  createdAt: [isDate, required],
  updatedAt: [isDate, nullable],
};

interface ITodoUpdate {
  name?: string;
  title?: string;
  description?: string;
  done?: boolean;
  color?: string;
  endAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const todoSchemaUpdate = {
  name: [optionalStringLength(3, 100)],
  title: [optionalStringLength(3, 100)],
  description: [isString, nullable],
  done: [isBool],
  color: [isString, nullable],
  endAt: [isDate, nullable],
  createdAt: [isDate],
  updatedAt: [isDate, nullable],
};

export { todoSchema, todoSchemaUpdate };
export type { ITodo, ITodoUpdate };
