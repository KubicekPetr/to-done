import { Application } from "../deps.ts";
import initRouters from './routers/index.ts';
import MongoDatabase from './helpers/mongodb.ts';

const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);

const mongoInstance = await MongoDatabase.getInstance();

const result = await mongoInstance.getDatabase.collection('todo').insertOne({
  title: 'MySecondTodo',
  description: 'Save my second todo in mongo',
});

console.log(result)

const app = new Application();
initRouters(app);

app.addEventListener("listen", () => {
  console.log(`Server is listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT });
