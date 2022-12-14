import React, { useState, useEffect, useReducer } from "react";
import AppRouter from "./components/AppRouter";
import Cart from "./components/Cart";
import OrderComplete from "./components/OrderComplete";
import "./style/App.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const App = () => {

    const [displayCart, setDisplayCart] = useState(() => false);
    const [cart, setCart] = useState([]);
    const [ignored, ForceReducer] = useReducer(x => x + 1, 0);
    const [order, setOrder] = useState(false);
    const [total, setTotal] = useState(0);

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

    const checkout = () => {
        setCart([]);
        setDisplayCart(false);
        setOrder(true);
        setTotal(0);
        setTimeout(() => {
            setOrder(false);
        }, 3000);
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
        } else if (c[index].quantity > 0) {
            c[index].quantity--;
        }
        c[index].total = c[index].quantity * c[index].price;
        setCart(c);
        ForceReducer();
    }

    const SetCart = (array) => {
        setCart(array);
        ForceReducer();
    }

    const showCart = () => {
        setDisplayCart(!displayCart);
    }

    useEffect(() => {
        const ans = cart.reduce((acc, curr) => acc + curr.total, 0);
        setTotal(ans);
    }, [ignored])

    return (
        <div>

            <div className="header">
                <div id="header-divs1">
                    <h2>PokeMart</h2>
                </div>
                <div id="header-divs2">
                    <li><a href="/">Home</a></li>
                    <li><a href="/items">Items</a></li>
                </div>
                <div id="header-divs3">
                    <button className="cart-btn"
                        onClick={showCart}><AiOutlineShoppingCart size="2rem" /></button>
                </div>
            </div>

            <AppRouter addToCart={AddToCart} />
            {
                displayCart && (
                    <Cart cart={cart} reducer={ignored} addMoreItem={ChangeNumOfItems}
                        changeCart={SetCart} close={showCart}
                        checkout={checkout} total={total} />
                )
            }
            {
                order && (
                    <OrderComplete />
                )
            }
        </div>
    )
}

export default App;