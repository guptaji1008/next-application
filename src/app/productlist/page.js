"use client"
import { useEffect, useState } from 'react'

export default function page() {

    const [productArr, setProductArr] = useState([])

    const setArrFunc = async () => {
      let data = await fetch("https://dummyjson.com/products")
      data = await data.json()
      setProductArr(data.products)
      console.log(data.products)
  }

    useEffect(() => {
      setArrFunc()
    }, [])

  return (
    <div>
      <h1>Products list : </h1>
      {
        productArr.length !== 0 ? <div>
            {
                productArr.map((elem, index) => <div key={index}>
                        <h3>Product Name : {elem.title}, Price : {elem.price}</h3>
                    </div>
                )
            }
        </div> : <h3>No data found</h3>
      }
    </div>
  )
}
