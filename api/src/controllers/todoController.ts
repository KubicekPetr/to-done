import { Bson } from '../../deps.ts';

import MongoDatabase from "../helpers/mongodb.ts";
import { validateTodo, validateMongoId } from "../utils/validation.ts";
import { ITodo } from "../models/todoModel.ts";

const db = (await MongoDatabase.getInstance()).getDatabase;
const todoCollection = db.collection("todo");

export const getAll = async (context: any) => {
  console.log("Getting all todos");
  let response: Object;
  try {
    const data = await todoCollection.find().toArray();
    response = {
      success: true,
      length: data.length,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      length: 0,
      error,
    };
  }
  context.response.body = JSON.stringify(response);
};

export const get = async (context: any) => {
  const id: string = context.params.id;
  console.log(`Getting the todo with id ${id}`);
  let response: Object;
  try {
    validateMongoId(id);
    const data = await todoCollection.findOne({ _id: new Bson.ObjectId(id) });
    if (!data) {
      throw "A todo does not exist"
    }
    response = {
      success: true,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      error,
    };
  }
  context.response.body = JSON.stringify(response);
};

export const post = async (context: any) => {
  const body = context.request.body();
  const data = await body.value as ITodo;
  let response: Object;
  try {
    await validateTodo(data);
    await todoCollection.insertOne(data);
    response = {
      success: true,
      data,
    };
  } catch (error) {
    response = {
      success: false,
      error,
    };
  }
  context.response.body = JSON.stringify(response);
};

export const update = async (context: any) => {
};

export const remove = async (context: any) => {
};
