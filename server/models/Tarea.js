import mongoose from "mongoose";

const tarea = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: String,
        required: true,
        trim: true
    },
    fav: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        required: true
    }
})

export default mongoose.model('Tarea', tarea);