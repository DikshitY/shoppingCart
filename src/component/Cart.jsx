import { useContext, useEffect, useState } from "react";
import Item from "./Item";
import ShoppingContext from "../context/Context";

function Cart(){
    const {cart} = useContext(ShoppingContext)
    const [total, setTotal] = useState(0)

    const renderCart  =  cart.map((item) => {
        return <Item key= {item.id} item ={item}/>
    })

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
      }, [cart]);

    return <div >
        <h1 className="text-4xl text-center font-bold py-5">Total: ${total}</h1>
        <div className="flex flex-wrap justify-around p-5">{renderCart}</div>
    </div>
}

export default Cart;