// import { DB_NAME } from "../constents";
// import mongoose from "mongoose";
// import "dotenv/config";
import dotenv from "dotenv";
dotenv.config({ path: "../src" });

const uri = process.env.MONGODB_URI;
const port = process.env.PORT;
// const DB_NAME = "myYoutube";

// console.log(`DB NAME is : ${DB_NAME}`);

console.log(`connection string is : ${uri} and port = ${port}`);
/*
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI / DB_NAME}`
    );
    console.log(
      `\n Mogo DB connected || DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`Mongo DB connection error : ${error}`);
    process.exit(1);
  }
};

connectDB();
*/
