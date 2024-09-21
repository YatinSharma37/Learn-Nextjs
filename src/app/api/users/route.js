import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

// Connect to the database
connectDb();

// Handle GET request to fetch all users
export async function GET(req) {
    try {
        let arr=[]
         const users = await User.find(); // Fetch all users from the database
         

        // Return the list of user names
        return NextResponse.json(users);
       
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return NextResponse.json({ message: "Failed to fetch users" }, { status: 500 });
    }
}

// Handle POST request to create a new user
export async function POST(request) {
    try {
        const data = await request.json();
        const { name, email, password } = data;

        if (!name || !email || !password) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "Email already exists" }, { status: 300 });
        }

        const user = new User({ name, email, password });
        const createdUser = await user.save();

        return NextResponse.json(createdUser, { status: 201 });
    } catch (error) {
        console.error("Failed to create user:", error);
        return NextResponse.json({ message: "Failed to create user", error: error.message }, { status: 500 });
    }
}



// Handle PUT request to update a user
export async function PUT(request) {
    try {
        const data = await request.json();
        const { id, name, email, password } = data;

        if (!id || !name || !email || !password) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const updatedUser = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });

        if (!updatedUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json(updatedUser);
    } catch (error) {   
        console.error("Failed to update user:", error);
        return NextResponse.json({ message: "Failed to update user" }, { status: 500 });
    }
}

// Handle DELETE request to delete a user

