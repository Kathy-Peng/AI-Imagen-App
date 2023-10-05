import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import { connect } from "mongoose";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

//pull environment variables from dotenv file
dotenv.config();
const app = express();
//middleware
app.use(cors());
app.use(express.json({limit:'50mb'}));
//create api endpoints that we can hook on to from front-end sides
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
// so we know the app is running when visiting the urls
app.get('/', async (req, res) => {
    res.send("Hello from Dall-E");
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, ()=>
        console.log("app has started on http://localhost:8080"))
    }catch (error){
        console.log(error);
    }

}

startServer();

