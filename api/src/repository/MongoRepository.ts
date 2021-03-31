import { Bson } from "../../deps.ts";
import { ITodo, ITodoUpdate } from "../models/todoModel.ts";
import { IMongoRepository, IMongoUpdateResult } from "./IRepository.ts";
import MongoDatabase from "../helpers/mongodb.ts";

const db = (await MongoDatabase.getInstance()).getDatabase;
const todoCollection = db.collection<ITodo>("todo");

export class MongoRepository implements IMongoRepository {
  async findMany(): Promise<ITodo[]> {
    return await todoCollection.find().toArray();
  }

  async findOne(id: string): Promise<ITodo | undefined> {
    return await todoCollection.findOne({ _id: new Bson.ObjectId(id) });
  }

  async insertOne(todo: ITodo): Promise<Bson.Document> {
    return await todoCollection.insertOne(todo);
  }

  async updateOne(
    id: string,
    todoUpdate: ITodoUpdate,
  ): Promise<IMongoUpdateResult> {
    return await todoCollection.updateOne({
      _id: new Bson.ObjectId(id),
    }, {
      $set: todoUpdate,
    });
  }

  async deleteOne(id: string): Promise<number> {
    return await todoCollection.deleteOne({ _id: new Bson.ObjectId(id) });
  }
}