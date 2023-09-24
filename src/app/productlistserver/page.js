import Button from "./Button"


const setArrFunc = async () => {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}

export default async function page() {

    const productlist = await setArrFunc()

  return (
    <div>
      <h1>Products list rendered from server side : </h1>
      {
        productlist.length !== 0 ? <div>
            {
                productlist.map((elem) => <div>
                    <h3>Product Name: {elem.title}</h3>
                    <Button price={elem.price}/>
                </div> )
            }
        </div> : <h3>No result found</h3>
      }
    </div>
  )
}
