import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default: 'Agustin Saravia'
    },
    authorImg: {
        type: String,
        required: true,
        default: 'https://avatars.githubusercontent.com/u/87948201?v=4'
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city", // Aquí debes usar el nombre del modelo que has registrado, en este caso, "city".
    },
    img: {
        type: String,
        required: true,
        default: "none"
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration:{
        type: Number,
        required: true,
        default: 0
    },
    like: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
});

export default mongoose.model("itinerary", itinerarySchema);
