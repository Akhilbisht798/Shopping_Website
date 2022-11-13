import React, { useState, useEffect } from "react";

const Cart = (props) => {
    const [cartItems, setCartItems] = useState(props.cart);

    useEffect(() => {
        setCartItems(props.cart);
        console.log("Props change");
        console.log(cartItems);
    }, [props.reducer])

    return (
        <div className="container">
            {cartItems.map((curr, index) => (
                <div key={index} data-index={index} >
                    <p>{curr.item} - quantity: {curr.quantity}</p>
                    <p>Price - {curr.total}</p>
                    <button onClick={props.addMoreItem} value="+">+</button>
                    <button onClick={props.addMoreItem} value="-">-</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;