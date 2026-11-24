import authRouter from "./auth.js";
import userRouter from "./user.js";
import portfolioRouter from "./portfolio.js";
import { Router } from "express";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(portfolioRouter);
export default router;