import { NextResponse } from "next/server";
import { User } from "@/models/user";

export async function DELETE(request, { params }) {
    const { userId } = params;

    try {   
        await User.deleteOne({_id:userId});

        return NextResponse.json({ message: `User  deleted` }, { status: 200 });
    } catch (error) {
        console.error("Failed to delete user:", error);
        return NextResponse.json({ message: "Failed to delete user" }, { status: 500 });
    }
}
