import { useState } from "react"


const ItemList=(props)=>{
    const [quan,setQuan]=useState("")

    const ul=document.querySelector("ul")

    const handleBuyButton=()=>{

    }

    

    const handleQuantityChange=(e)=>{
        setQuan(e.target.value) 
    }

    const handleDeleteButton=(e)=>{
        props.onDel();
        let del=e.target.parentElement;
        ul.removeChild(del);
    }

    
    
    return(
        <>
       
        {props.lists.map((list)=>{
            return <li key={list.id}>
                {list.name+"--------------Rs: "+list.price+"--------------"+list.quantity+"KG"}
                <input type="number" onChange={handleQuantityChange}  />
                <button type="click" id="buy" onClick={handleBuyButton}>Buy</button>
                <button type="click" onClick={handleDeleteButton}>Delete</button>
            </li>
        })}
        </>
    )
}

export default ItemList;