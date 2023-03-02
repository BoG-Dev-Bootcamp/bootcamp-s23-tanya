import mongoose from "mongoose"

/*
They want to keep track of each dog's name, age, breed, date they entered the shelter, and date adopted.
*/
const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: float, // assuming age in years
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    dateEntered: Date,
    dateAdopted: Date
})

export default mongoose.model("Dog", dogSchema)