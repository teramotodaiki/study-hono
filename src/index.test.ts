import app from ".";

describe("Hello World", () => {
  test("GET /", async () => {
    const res = await app.request("http://localhost/");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello Hono!");
  });
});
