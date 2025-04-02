const mongoose = require("mongoose")
export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://admin:123@cluster0.fkvqe.mongodb.net/cocoon?retryWrites=true&w=majority&appName=Cluster0")
        console.log("ket noi db thanh cong")
    } catch (e) {
        console.log(e.message)
    }
}