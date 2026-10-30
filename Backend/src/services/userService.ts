import User from "../models/userModel.js";
import bcrypt from "bcrypt"

export const userSignup = (body)=>{
    return User.create({ name: body.name, email: body.email, password: body.password, phone: body.phone, profileImg: body.profileImg});

}

export const getUser = (id: string) => {
    return User.findById(id);
}

export const getUserByEmail = (email) => {
    return User.findOne({ email })
}

export const updateLoggedUser = (id: string, body) => {
    return User.findOneAndUpdate({ _id: id }, { name: body.name, slug: body.slug, email: body.email, phone: body.phone, profileImg: body.profileImg,}, { returnDocument: "after" });
}

export const deleteLoggedUser = (id:string)=>{
    return User.findByIdAndUpdate(id,{active: false},{returnDocument: "after"});
}

export const changeUserPassword = async (id: string, body) => {
    return User.findByIdAndUpdate(id, { password: await bcrypt.hash(body.password, 12), passwordChangedAt: Date.now() }, { returnDocument: "after" })
}
