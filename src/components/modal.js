import React, { useState } from "react";
import "../style/modal.css"

const Modal = (props) => {

    const [product, setProduct] = useState(props.product);

    const onAddToCart = () => {
        props.addToCart(product);
        props.close();
    }

    return (
        <div id="Shop-M">
            <div className="Modal-content">
                <div className="modal-head">
                    <h3>{props.product.item}</h3>
                    <button className="close btn btn-danger"
                        onClick={props.close}>X</button>
                </div>
                <hr />
                <div className="Modal-Body">
                    <div>
                        <img src={props.product.img} id="modal-img" />
                    </div>
                    <div>
                        <p>{props.product.use}</p>
                        <button
                            onClick={onAddToCart}
                            className="btn btn-primary"
                        >Add to Cart</button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Modal;