import { useEffect, useState } from "react"
import AddtoCart from "./AddtoCart"
import { Link } from "react-router-dom"

const SearchProduct = ({ Product }) => {
    const [searchTerm, setsearchTerm] = useState("")
    const [addItemId, setaddItemId] = useState(null)
    const [products, setproducts] = useState([])
    
    const filterProducts = products.filter((item) => {
        return item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const addToCart = ({item}) => {
        const existingProducts =JSON.parse(localStorage.getItem("Products")) || []
        localStorage.setItem("Products", JSON.stringify([...existingProducts, item]))
        // const updatedProducts = [...existingProducts, item]
    }

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch("http://localhost:5000/api/product/allProducts");
            const data = await res.json();
            // console.log(`Products: ${data}`)
            setproducts(data)
        }

        getProducts()

    },[])
    
    return (
        <div className='border border-gray-300 px-20 py-7'>
            <div className="flex justify-between items-center">
            <h1 className='text-2xl font-semibold mb-5 pt-3'>All Products</h1>
            <Link to={'/cart'} className="bg-blue-300 p-2 rounded-md font-semibold">Go to Cart</Link>
            </div>
            <div className='flex flex-col gap-5 '>
                <span className='flex flex-col gap-2'>
                    <h1>Product Name</h1>
                    <input value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} className='border border-gray-300 p-2 w-full' type="text" placeholder='Enter Product Name' />
                </span>

            </div>
            <table className="w-full mt-7 border-collapse">
                <thead>
                    <tr className="bg-gray-300 font-semibold">
                        <th className="p-3 text-center">Name</th>
                        <th className="p-3 text-center">Price</th>
                        <th className="p-3 text-center">Category</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filterProducts.map((item, index) => (
                        <tr className="bg-gray-100 mb-1" key={index}>
                            <td className="px-3 text-center">{item.productName}</td>
                            <td className="px-3 text-center">{item.price}</td>
                            <td className="p-3 text-center">{item.category}</td>
                            <td className="px-3 text-center">
                                <button key={index} onClick={() => {setaddItemId(index),addToCart({item})}} className="bg-blue-300 px-2 py-1.5 rounded-md cursor-pointer">
                                    {addItemId === index ? <span>Added to Cart</span> : "Add to Cart"}
                                </button>
                                
                            </td>
                        </tr>
                    ))}



                    {/* {filterProducts.map((item, index) => (
                        <tr className="bg-gray-100 mb-1" key={index}>
                            <td className="px-3 text-center">{item.productName}</td>
                            <td className="px-3 text-center">{item.productPrice}</td>
                            <td className="p-3 text-center">{item.Category}</td>
                            <td className="px-3 text-center">
                                <button key={index} onClick={() => {setaddItemId(index),addToCart({item})}} className="bg-blue-300 px-2 py-1.5 rounded-md">
                                    {addItemId === index ? <span>Added to Cart</span> : "Add to Cart"}
                                </button>
                                
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
            
        </div>
    )
}

export default SearchProduct