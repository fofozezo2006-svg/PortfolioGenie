import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'name required'],
        },
        email: {
            type: String,
            required: [true, 'email required'],
            unique: true,
            lowercase: true,
        },
        phone: String,

        password: {
            type: String,
            required: [true, 'password required'],
            minlength: [6, 'Too short password'],
        },
        passwordChangedAt: Date,
        passwordResetCode: String,
        passwordResetExpires: Date,
        passwordResetVerified: Boolean,
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        active: {
            type: Boolean,
            default: true,
        },
        isSupscribed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12)
    }
})


const User = mongoose.model('User', userSchema);

export type userType = NonNullable<
    Awaited<ReturnType<typeof User.findOne>>
>;
export default User;