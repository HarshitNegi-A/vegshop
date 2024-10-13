import { useState } from "react"


const ItemList=({lists,onDel,setData})=>{
    const [quan,setQuan]=useState("")

    const ul=document.querySelector("ul")

    const handleBuyButton=(id)=>{
        const editedList = lists.map((list)=>{
            if(list.id===id){
                return {...list,quantity:Number(list.quantity)-Number(quan)}
            }
            return list;
        })
        setData(editedList)
    }

    

    const handleQuantityChange=(e)=>{
        setQuan(e.target.value) 
    }

    const handleDeleteButton=(e)=>{
        onDel();
        let del=e.target.parentElement;
        ul.removeChild(del);
    }

    
    
    return(
        <>
       
        {lists?.map((list)=>{
            return <li key={list.id}>
                {list.name+"--------------Rs: "+list.price+"--------------"+list.quantity+"KG"}
                <input type="number" onChange={handleQuantityChange}  />
                <button type="click" onClick={()=>handleBuyButton(list.id)}>Buy</button>
                <button type="click" onClick={handleDeleteButton}>Delete</button>
            </li>
        })}
        </>
    )
}

export default ItemList;