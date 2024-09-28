import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
// import "dotenv/config";
import dotenv from "dotenv";
dotenv.config();
// dotenv.config({ path: "../../.env" }); // used to provide path

const uri = process.env.MONGODB_URI;
const port = process.env.PORT;

console.log(`connection string : ${uri} || port = ${port}`);
console.log("DB Name: ", DB_NAME);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`);

    // const connectionInstance = await mongoose.connect(
    //   "mongodb+srv://irfan:muhammad@cluster1.7zp5o.mongodb.net/myYoutube"
    // );

    console.log(
      `\n Mogo DB connected || DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`Mongo DB connection error : ${error}`);
    process.exit(1);
  }
};

export default connectDB;
