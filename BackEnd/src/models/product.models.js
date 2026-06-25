import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    InStock: {
        type: Boolean,
        default: true,
        required: true
    },
    Category: {
        type: String,
        required: true
    }
},{timestamps: true})


export const product = mongoose.model("Product", productSchema)