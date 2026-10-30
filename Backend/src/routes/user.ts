import { protect} from "../controllers/authController.js";
import * as userController from "../controllers/userController.js";
import * as userValidator from "../utils/validators/userValidator.js"
import { Router } from "express";

const userRouter = Router();

userRouter.get("/api/v1/me",protect,userController.getMe);
userRouter.patch("/api/v1/me/changePassword",protect,userValidator.changeMyPassword, userController.changeMyPassword)
userRouter.patch("/api/v1/me/update",protect, userController.uploaduserImage,...userValidator.updateUser,userController.resizeImage,userController.updateMe)
userRouter.delete("/api/v1/me/delete", protect, userController.deleteMe)

export default userRouter;