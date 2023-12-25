import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Main = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true,
        unique: true,
        min: 8,
        max: 20,
        default: '@I_Summarizer'
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        unique: true,
        required: true,
        min: 8,
        max: 20,
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/]
    }
})

const Main_Schema = mongoose.model('main', Main)
export default Main_Schema;
