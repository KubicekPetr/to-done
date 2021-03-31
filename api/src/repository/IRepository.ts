import { Bson } from "../../deps.ts";
import { ITodo, ITodoUpdate } from "../models/todoModel.ts";

export interface IMongoUpdateResult {
  upsertedId: Bson.Document | undefined;
  upsertedCount: number;
  matchedCount: number;
  modifiedCount: number;
}

export interface IMongoRepository {
  findMany(): Promise<ITodo[]>;
  findOne(id: string): Promise<ITodo | undefined>;
  insertOne(todo: ITodo): Promise<Bson.Document>;
  updateOne(id: string, todoUpdate: ITodoUpdate): Promise<IMongoUpdateResult>;
  deleteOne(id: string): Promise<number>;
}
