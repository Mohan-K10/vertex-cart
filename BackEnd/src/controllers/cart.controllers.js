import { Cart } from "../models/cart.models.js"

export const addToCart = async (req, res) => {
    try {
        // Takes the Particular Product ID from product.controllers.js
        const { productId } = req.params.productId;
        // Finds atleast one document is present in collection of Mongo database or not
        let cart = await Cart.findOne();

        if(!cart) {
            // If no document is present in collection then create a new document
            // Takes product Id as reference for product schema (declared in cart.models.js)
            cart = await Cart.create({
                items: [{ product: productId }]
            })
        } else {
            // If atleast one document is present in collection then simply add another one by using push() method
            cart.items.push({ product: productId})
            await cart.save()
        }

        res.status(201).json({message: "Product is added to Cart"})
    } catch (error) {
        res.status(500).json({message: "Unable to add Product to Cart"})   
    }
}