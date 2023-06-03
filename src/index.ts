import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));
app.all("*", (c) => c.text(`You've reached ${c.req.url}`));

export default app;
