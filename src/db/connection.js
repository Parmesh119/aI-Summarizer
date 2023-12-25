import mongoose from 'mongoose';
import process from 'process';
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import Main_Schema from './schema.js';
const app = express();
app.use(express.json());


export default mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    throw new Error(error);
});
