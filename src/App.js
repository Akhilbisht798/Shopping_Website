import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Cart from "./components/Cart";

const App = () => {

    const [displayCart, setDisplayCart] = useState(() => false);
    const [cart, setCart] = useState([]);
    const [ignored, ForceReducer] = useReducer(x => x + 1, 0);

    const SearchItem = (nameKey, array) => {
        let ans = -1;
        array.find((o, i) => {
            if (o.item === nameKey) {
                ans = i;
                return true;
            }
        });
        return ans;
    }

    const AddToCart = (product) => {
        let c = cart;
        if (c.includes(product)) {
            const i = SearchItem(product.item, c);
            c[i].quantity++;
            c[i].total = c[i].quantity * c[i].price;
        } else {
            product.quantity++;
            product.total = product.price;
            c.push(product);
        }
        setCart(c);
        ForceReducer();
    }

    const ChangeNumOfItems = (e) => {
        const index = e.target.parentNode.dataset.index;
        const oper = e.target.value
        let c = cart;
        if (oper === "+") {
            c[index].quantity++;
        } else {
            if (c[index].quantity > 0) {
                c[index].quantity--;
            }
        }
        c[index].total = c[index].quantity * c[index].price;
        setCart(c);
        ForceReducer();
    }

    return (
        <div className="container">

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/items">Items</a></li>
            </ul>

            <AppRouter addToCart={AddToCart} />
            <Cart cart={cart} reducer={ignored} addMoreItem={ChangeNumOfItems} />
        </div>
    )
}

export default App;