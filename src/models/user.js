import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,   // Ensure unique email addresses
        lowercase: true, // Convert email to lowercase to enforce case insensitivity
        trim: true,      
    },
    password: {
        type: String,
        required: true,

    },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);

