import { body, checkSchema } from "express-validator";
import AppError from "../../errors/AppError.js";
import { getUserByEmail } from "../../services/userService.js";
import slugify from "slugify"
import validatorMiddleware from "../../middlewares/validatorMiddleware.js";
import bcrypt from "bcrypt";
const updateLoggedUserValidationSchema = {
    name: {
        optional: true,
        trim: true,
        notEmpty: {
            errorMessage: "Name cannot be empty",
        },
        custom: {
            options: (value: string, { req }) => {
                req.body.slug = slugify(value, { lower: true });
                return true;
            },
        },
    },

    email: {
        optional: true,
        trim: true,
        isEmail: {
            errorMessage: "Invalid email address",
        },
        normalizeEmail: true,
        custom: {
            options: async (value: string, { req }) => {
                const user = await getUserByEmail(value);

                if (user) {
                    throw new AppError(400,"Email already exists");
                }

                return true;
            },
        },
    },

    phone: {
        optional: true,
        isMobilePhone: {
            options: ["any"] as const,
            errorMessage: "Invalid phone number",
        },
    },

    profileImg: {
        optional: true,
        isString: {
            errorMessage: "Profile image must be a string",
        },
    },

    role: {
        optional: true,
        isIn: {
            options: [["user", "manager", "admin"]],
            errorMessage: "Invalid role",
        },
    },

    active: {
        optional: true,
        isBoolean: {
            errorMessage: "Active must be a boolean",
        },
        toBoolean: true,
    },
}

export const updateUser = [
    checkSchema(updateLoggedUserValidationSchema), validatorMiddleware
]



export const changeMyPassword = [
    body("currentPassword").notEmpty().withMessage("current password is required").custom(async (val, { req }) => {
        const isPasswordCorrect = await bcrypt.compare(req.body.currentPassword, req.user.password);
        if (!isPasswordCorrect) {
            throw new AppError(400, `current password is incorrect`)
        }
        return true;
    }), body("password").notEmpty().withMessage("password is required"),
    body("confirmPassword").notEmpty().withMessage("confirm password is required").custom(async (val, { req }) => {
        if (val != req.body.password) {
            throw new AppError(400, `confirm password not equal to password`)
        }
        return true;

    })
    , validatorMiddleware]