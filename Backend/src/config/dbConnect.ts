import mongoose from "mongoose";
import "dotenv/config";

export const dbConnect = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("db connected");
}