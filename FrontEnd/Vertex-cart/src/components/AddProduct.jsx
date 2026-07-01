import React from 'react'
import { useState } from 'react'


const AddProduct = ({AllProducts}) => {
    const [productName, setproductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [Category, setCategory] = useState("")

    const newProduct = {
        productName, 
        productPrice,
        Category
    }

    const handleSubmit = () => {
        AllProducts((list)=>[...list, newProduct])
        console.log("data passed")

        // Send Product data to backend
        await fetch("http://localhost:5000/api/product", {
            method: "POST",
            headers: { "Content-type" : "application/json" },
            body: JSON.stringify({ productName, productPrice, Category })
        })

        setproductName("")
        setProductPrice("")
        setCategory("")
    }


    return (
        <div className='border border-gray-300 px-20 py-5 my-5'>
            <div className='flex flex-col gap-2 my-2'>
                <h1>Add Product</h1>
                <input value={productName} onChange={(e) => setproductName(e.target.value)} className='w-full border border-gray-300 p-2' type="text" placeholder='Enter Product Name' />
            </div>
            <div className='flex gap-15 py-2'>
                <span className='w-[50vw] flex flex-col gap-2'>
                    <h1>Price</h1>
                    <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className='w-full border border-gray-300 p-2' type="String" placeholder='Enter Price' />
                </span>

                <span className='w-[50vw] flex flex-col gap-2'>
                    <h1>Category</h1>
                    {/*  For now input tag, later dropdown selection */}
                    <input value={Category} onChange={(e) => setCategory(e.target.value)} className='w-full border border-gray-300 p-2' type="text" placeholder='Category' />
                </span>
                <button className='flex items-center px-5 h-10 bg-blue-300 mt-8 rounded-md font-semibold cursor-pointer' onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}

export default AddProduct