export const createProduct = async (req, res) => {
    const { ProductName, Price, InStock, Category } =  req.body;
    console.log("Product Name: ", ProductName);
    console.log("Product Price: ", Price);
    console.log("Product Stock: ", InStock);
    console.log("Product Category: ", Category);
    res.status(201).json({message: "Product created"})
}


export const getAllProducts = async (req, res) => {

}
export const updateProduct = async (req, res) => {

}
export const deleteProduct = async (req, res) => {

}


