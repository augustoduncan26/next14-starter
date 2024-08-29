import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    // connection.db.collection("next", function(err, collection){
    //     collection.find({}).toArray(function(err, data){
    //         // it will print your collection data
    //         console.log(data); 
    //     })
    // });
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_DB);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};