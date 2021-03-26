import { Application } from "../deps.ts";
import initRouters from './routers/index.ts';
import MongoDatabase from './helpers/mongodb.ts';

const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);
const MONGO_URL = Deno.env.get("MONGO_URL") || "mongodb://localhost:27017";

const mongoDB = new MongoDatabase('todos', MONGO_URL);
await mongoDB.connect();

const result = await mongoDB.getDatabase.collection('todo').insertOne({
  title: 'MyFirstTodo',
  description: 'Save my first todo in mongo',
});

const app = new Application();
initRouters(app);

app.addEventListener("listen", () => {
  console.log(`Server is listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT });
