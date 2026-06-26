import { Router } from "express";
import { createProduct } from "../controllers/product.controllers.js";


const router = Router()

// Use this code style when the http handles multiple methods
// router.route("/new").post(createProduct)

// Use this code style when route works for single purpose only
router.post("/new", createProduct)

export default router