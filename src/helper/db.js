import mongoose from "mongoose";
import { User } from "../models/user";
export async function connectDb(){
   try{
    const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
      dbName:"work_manager",
    });
    console.log("connected ---------------------------");

   // const user1=new User({
   //      name:"yatin",
   //      email:"abc@gmail.com",
   //      password:"12345",
   // })
   // await user1.save();
   
   


    
   //  console.log(connection);
    
   }
   catch(error){
      console.log("Error found................");
      console.log(error);
      
   }
};