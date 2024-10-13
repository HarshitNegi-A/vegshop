import { useState } from "react";
import ItemList from "./ItemList";

const Shop=()=>{
    const [count,setCount]=useState(0);
    const [item,setItem]=useState("")
    const [price,setPrice]=useState("")
    const [quantity,setQuantity]=useState("")
    const [data,setData]=useState([])

    const handleItemChange=(e)=>{
        setItem(e.target.value)
    }

    const handlePriceChange=(e)=>{
        setPrice(e.target.value)
    }

    const handleQuantityChange=(e)=>{
        setQuantity(e.target.value)
    }

    const handleOnDel=()=>{
        setCount(count-1)
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        setCount(count+1)
        const obj={
            "name":item,
             "price":price,
             "quantity":quantity,
             "id":Math.random()
        }
        setData([...data,obj]) 
    }

    
    
    

    return(
        <>
        <h1 style={{textAlign:"center"}}>VEG SHOP</h1>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="item">Name:</label>
            <input type="text" id="item" value={item} onChange={handleItemChange}/><br/><br/><br/>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" value={price} onChange={handlePriceChange}/><br/><br/><br/>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange}/><br/><br/><br/>
            <button type="submit">Add To Shop</button>
        </form>
        <ul style={{listStyle:"none"}}>
            <ItemList lists={data} onDel={handleOnDel} setData={setData}/>
        </ul>
        
        <h2>Total:{count}</h2>
        </>
    )
}
export default Shop;