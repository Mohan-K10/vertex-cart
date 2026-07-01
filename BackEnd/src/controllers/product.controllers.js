import { Product } from "../models/product.models.js";

export const createProduct = async (req, res) => {
    const { productName, price, inStock, category } =  req.body;

    // console.log("Product Name: ", productName);
    // console.log("Product price: ", price);
    // console.log("Product Stock: ", inStock);
    // console.log("Product category: ", category);

    // const product = await Product.create({
    //     productName: productName,
    //     price: price,
    //     inStock: inStock,
    //     category: category
    // })

    const product = await Product.create(req.body)
    console.log(`Product Created:  ${product}`)
    res.status(201).json({message: "Product created"})
}


export const getAllProducts = async (req, res) => {
    try {
        const getProducts = await Product.find({})
        console.log(`Fetched All Products:  ${getProducts}`);
        res.status(201).json(getProducts)
    } catch (error) {
        res.status(500).json({message: "Error in getAllProducts function"})
    }
}
export const updateProduct = async (req, res) => {

}
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        console.log(`Product Deleted:  ${product}`)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message: "Error in deleteProduct function"})
    }
}


