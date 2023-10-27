import React, { useEffect, useState } from 'react'

function Product() {
    let [name, setName] = useState("")
    let [price, setPrice] = useState(0)
    let [category, setCategory] = useState("")
    let [url, setUrl] = useState("")
    let [product, setProduct] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("Products", JSON.stringify(product))
        setProduct([...product, {name, price, url, category}])
        console.log(product);
    }

    return (
        <div>
            <form action="">
                <input type="text" placeholder='Product Name' onChange={(e) => setName(e.target.value)} />
                <input type="url" placeholder='Product Image URL' onChange={(e) => setUrl(e.target.value)} />
                <input type="number" placeholder='Product Price' onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='Product Category' onChange={(e) => setCategory(e.target.value)} />
                <input type="submit" onClick={handleSubmit} />
            </form>

            {product.map((ele) => {
                return(
                    <>
                    <img src={ele.url} alt="" />
                    <h1>Name : {ele.name}</h1>
                    <h3>Price : {ele.price}</h3>
                    <p>Category : {ele.category}</p>
                    </>
                )
            })}
        </div>
    )
}

export default Product