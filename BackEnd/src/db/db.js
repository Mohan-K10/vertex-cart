import mongoose from "mongoose";

const connectDB = async ()=> {
    //connect MongoDB through mongoose
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("MongoDB connection FAILED ", error)
    }
}

export default connectDB