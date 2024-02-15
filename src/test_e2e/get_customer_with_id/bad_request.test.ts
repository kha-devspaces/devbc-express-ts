import request from "supertest";
import { app, pool } from "../../app";

afterAll(() => {
	pool.end();
});

test("get customer and reject status 400", async () => {
	await request(app).get("/customers/xxx").expect("Content-Type", /json/).expect(400);
});
