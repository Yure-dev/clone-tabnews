test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://reimagined-garbanzo-69r5r45x4954cr945-3002.app.github.dev/api/v1/status",
  );
  expect(response.status).toBe(200);
});
