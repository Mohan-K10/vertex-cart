import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts } from "../controllers/product.controllers.js";


const router = Router()

// Use this code style when the http handles multiple methods
// router.route("/new").post(createProduct)

// Use this code style when route works for single purpose only
router.post("/new", createProduct)
router.get("/allProducts",getAllProducts)
router.delete("/deleteProduct/:id", deleteProduct)


export default router