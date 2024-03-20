import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGODB_URI,{
        dbName : process.env.DB_NAME
    }).then(()=>{
        console.log("MongoDb connected to Database Successfully !");
    }).catch((err)=>{
        console.log("Error in Connecting to Mongo Db "+ err);
    })
}