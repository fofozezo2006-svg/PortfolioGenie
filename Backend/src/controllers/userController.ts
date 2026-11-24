import * as userService from "../services/userService.js";
import AppError from "../errors/AppError.js";
import jwt from "jsonwebtoken"
import type { StringValue } from "ms";




// @desc get logged in user data
// @route get /api/v1/me
// @access private
export const getMe = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }
    res.status(200).json({ data: req.user });
}

// @desc update logged in user data
// @route get /api/v1/me/update
// @access private
export const updateMe = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }
    const user = await userService.updateLoggedUser(req.user.id, req.body);
    res.status(200).json({ data: user });
}

// @desc update logged in user data
// @route get /api/v1/me/delete
// @access private
export const deleteMe = async (req, res, next) => {
    await userService.deleteLoggedUser(req.user.id);
    res.status(204).json({ status: 'Success' });
};

// @desc get logged in user data
// @route get /api/v1/me/changePassword
// @access private
export const changeMyPassword = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }
    await userService.changeUserPassword(req.user.id, req.body)
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRE_DATE as StringValue });
    res.status(200).json({ data: req.user, token });
}



