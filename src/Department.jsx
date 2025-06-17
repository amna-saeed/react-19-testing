import { useCallback, useEffect, useState } from "react";

function Department(){

    const [cart, setCart] =useState([])

    const userCart = async ()=>{
        try{
            const url = "https://dummyjson.com/users/6/carts";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-type" : "Application/json"
                }
            })
            const carts = await response.json();
            setCart(carts.carts)
            console.log(carts)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        userCart();
    },[])
    return(
        <>
            <h1>Department Carts</h1>
            {
                cart.map((item,index)=>(
                    <div key={index}> 
                        <h2>ID OF CART: {item.id} </h2>
                        <h2>Products here</h2>
                        <ul>
                            {
                                item.products.map((product, pIndex)=> (
                                    <li key={pIndex}> Product Id: {product.id} - Product Title: {product.title} - Price: {product.price} 
                                       - Quantity:{product.quantity} - Dis : {product.total}
                                    </li>
                                ))
                            }
                        </ul>   
                    </div>
                ))
            }
        </>
    )
}
export default Department;