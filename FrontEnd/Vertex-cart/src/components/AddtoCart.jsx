import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const AddtoCart = () => {
  const [cartList, setcartList] = useState([])
  const didRun = useRef(false)
  
  const products = JSON.parse(localStorage.getItem("Products"))
  // console.log(`Products came to add to cart ${products.productName}`)
  // const location = useLocation()

  const deleteProduct = (product) => {
    console.log(`Deleted Product ${product.productName}`)
    const updatedCartList = cartList.filter((list) => list.productName != product.productName)
    console.log(`After deleting product,heres new list : ${JSON.stringify(updatedCartList)}`)
    localStorage.setItem("Products", JSON.stringify(updatedCartList))
    setcartList(updatedCartList)
  }

  
  useEffect(()=> {
    if(didRun.current) return;
    didRun.current = true;
    setcartList(products)
  },[])

  // const item = location.state?.item

  // const rawData = localStorage.getItem("Products")
  // const products = rawData ? JSON.parse(rawData) : null;

  // const productList = () => {
  //   setcartList(list => [...list, products])
  // }

  


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[120vw] max-w-190 p-6 rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold ml-4">Your Cart</h1>
          <Link to={'/'}>
            <img className="cursor-pointer" src="/cross.png" alt="" />
          </Link>
        </div>

        <table className="w-full my-2 mt-6">
          <thead>
            <tr className=" bg-gray-300">

              <th className="p-4  text-center">Name</th>
              <th className="p-4 text-center">Price</th>
              <th className="p-4 text-center">Category</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>

            {!Array.isArray(cartList) || cartList.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-10 text-2xl font-semibold">No Products added to Cart</td>
              </tr>
            ) :


              (cartList.map((Product, index) => {
                return <tr className="bg-gray-200"  key={index}>
                  <td className="p-4  text-center">{Product.productName}</td>
                  <td className="p-4 text-center">{Product.productPrice}</td>
                  <td className="p-4 text-center">{Product.Category}</td>
                  <td className="p-3"><div className="flex justify-center">
                      <button key={index} onClick={() => deleteProduct(Product)} className="flex justify-center bg-red-300 px-4 py-2 rounded-md cursor-pointer">Delete</button>
                    </div></td>
                </tr>
              }
              ))}




            {/* {item ? (
              <tr className="flex items-center gap-30  bg-gray-200 mx-3 ">

                <td className="p-4  text-center">{item.productName}</td>
                <td className="p-4 text-center">{item.productPrice}</td>
                <td className="p-4 text-center">{item.Category}</td>
                <td className="p-3 text-center bg-red-300 rounded-md">Delete</td>
              </tr>
            ) : <>
              <p className="text-2xl font-semibold text-center p-10">No Products added to Cart</p>
            </>} */}

          </tbody>


        </table>
      </div>
    </div>
  )
}

export default AddtoCart