import { RouterContext } from "../../deps.ts";

export default async (context: RouterContext, next: any) => {
  await next();
  context.response.headers.set("Content-Type", "application/json");
};
