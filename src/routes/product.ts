import { Router } from "express";

const router = Router();

router.post("/products", async (_req, res, _next) => {
	res.status(200).json({
		result: "create product success!",
		status: 200,
	});
});

export default router;
