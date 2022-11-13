import React, { useState } from "react";

const Modal = (props) => {

    const [product, setProduct] = useState(props.product);

    return (
        <div id="Shop-M">
            <div className="Modal-content">
                <button className="close btn btn-danger"
                    onClick={props.close}>X</button>
                <h3>{props.product.item}</h3>
                <br />
                <hr />
                <p>{props.product.use}</p>
                <img src={props.product.img} />
                <div>
                    <button
                        onClick={(e) => props.addToCart(product)}
                        className="btn btn-primary"
                    >Add to Cart</button>
                </div>
            </div>
        </div >
    )
}

export default Modal;