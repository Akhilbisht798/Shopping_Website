import React, { useState, useEffect } from "react";
import OrderComplete from "./OrderComplete";
import "../style/cart.css"

const Cart = (props) => {
    const [cartItems, setCartItems] = useState(props.cart);

    //TODO: Show total price of the purchase.

    const RemoveElement = (e) => {
        let index = e.target.parentNode.dataset.index;
        let c = props.cart;
        if (props.cart[index].quantity === 0) {
            c.splice(index, 1);
            props.changeCart(c);
        }
    }

    const handleClick = (e) => {
        props.addMoreItem(e);
        RemoveElement(e);
    }

    useEffect(() => {
        setCartItems(props.cart);
    }, [props.reducer])

    return (
        <div className="Cart">
            <div className="cart-items">
                <div>
                    <p>Cart</p>
                    <button onClick={props.close} className="btn btn-danger">X</button>
                </div>
                {cartItems.map((curr, index) => (
                    <div key={index} data-index={index} >
                        <p>{curr.item} - quantity: {curr.quantity}</p>
                        <p>Price - {curr.total}</p>
                        <button onClick={props.addMoreItem} value="+">+</button>
                        <button onClick={handleClick} value="-">-</button>
                    </div>
                ))}
                <div>
                    <button onClick={props.checkout} className="btn btn-primary">Checkout</button>
                </div>
                <div>
                    {props.total}
                </div>
            </div>
        </div>
    );
};

export default Cart;