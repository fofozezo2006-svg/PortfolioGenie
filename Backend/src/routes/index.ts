import authRouter from "./auth.js";
import userRouter from "./user.js";
import { Router } from "express";

const router = Router();

router.use(authRouter);
router.use(userRouter);

export default router;