import React, { useState, useEffect } from "react";
import "../style/cart.css"
import { motion } from "framer-motion";

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
        <motion.div initial={{ x: 300 }} animate={{ x: 0 }}
            className="Cart">
            <div className="cart-items">
                <div className="cart-head">
                    <p>Your Cart</p>
                    <button onClick={props.close} className="btn btn-danger">X</button>
                </div>
                <hr />
                <div className="cart-items-inside">
                    {cartItems.map((curr, index) => (
                        <div key={index} className="cart-indi-items">
                            <div>
                                <img src={curr.img} className="cart-img" />
                                <p>{curr.item}</p>
                            </div>
                            <div data-index={index}>
                                <p>Price: {curr.total}</p>
                                <button onClick={handleClick} value="-"
                                    className="change-btn">-</button>
                                <p className="quantity">{curr.quantity}</p>
                                <button onClick={props.addMoreItem} value="+"
                                    className="change-btn">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-checkout">
                    <p>Total Amount - {props.total}</p>
                    <button onClick={props.checkout} className="btn btn-primary">Checkout</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Cart;