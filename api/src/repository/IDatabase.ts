import { Bson } from "../../deps.ts";
import { ITodo, ITodoUpdate } from '../models/todoModel.ts';


interface IMongoUpdateResult {
    upsertedId: Bson.Document | undefined;
    upsertedCount: number;
    matchedCount: number;
    modifiedCount: number;
  }

interface IDatabase{
    getAll(): ITodo[];
    get(): ITodo | undefined;
    insertOne(todo: ITodo): Bson.Document;
    updateOne(id: Bson.ObjectID, todoUpdate: ITodoUpdate): IMongoUpdateResult;
    deleteOne(id: Bson.ObjectID): number;
}