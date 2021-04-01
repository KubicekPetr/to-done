export default async (context: any, next: any) => {
    await next();
    context.response.headers.set("Content-Type", "application/json");
};