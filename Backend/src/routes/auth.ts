import * as authController from "../controllers/authController.js"
import * as authValidator from "../utils/validators/authValidator.js"
import { Router } from "express"

const authRouter = Router();

authRouter.post(
  "/api/v1/auth/signup",
  authValidator.signup,
  authController.signup
);

authRouter.post(
  "/api/v1/auth/signin",
  authValidator.signin,
  authController.signin
);

authRouter.post(
  "/api/v1/auth/forgotPassword",
  authValidator.forgotPassword,
  authController.forgetPassword
);

authRouter.post(
  "/api/v1/auth/verifyResetCode",
  authValidator.verifyResetCode,
  authController.verifyResetCode
);

authRouter.post(
  "/api/v1/auth/resetPassword",
  authValidator.resetPassword,
  authController.resetPassword
);

export default authRouter;