import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set("strictQuery", true);

    mongoose.connect(url).then(()=>{
        console.log("MongoDb connected!");
    }).catch((err)=>{
        console.log(err);
    })
}

// need this line so we can import the connectDB function in index.js
export default connectDB;