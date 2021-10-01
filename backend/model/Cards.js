import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name:String,
    imgUrl:String
})
const cards = mongoose.model('cards', cardSchema);
export default cards;