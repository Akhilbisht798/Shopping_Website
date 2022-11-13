import React, { useState, useEffect } from "react";
import "../style/items.css"
import Modal from "./modal";

const Items = (props) => {

    const [product, setProducts] = useState([
        { item: "choice band", use: "Raises a move’s power, but permits only that move.", img: "https://archives.bulbagarden.net/media/upload/0/09/Dream_Choice_Band_Sprite.png", quantity: 0, price: 1000, total: 0 },
        { item: "choice scarf", use: "Raises Speed, but only one move can be used", img: "https://archives.bulbagarden.net/media/upload/6/6a/Dream_Choice_Scarf_Sprite.png", quantity: 0, price: 1000, total: 0 },
        { item: "choice specs", use: "Raises Special Attack, but only one move can be used.", img: "https://archives.bulbagarden.net/media/upload/e/e6/Dream_Choice_Specs_Sprite.png", quantity: 0, price: 1000, total: 0 },

        { item: "Poké Ball", use: "A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system. ", img: "https://archives.bulbagarden.net/media/upload/9/93/Bag_Pok%C3%A9_Ball_Sprite.png", quantity: 0, price: 1000, total: 0 },
        { item: "Great Ball", use: "A good, high-performance Ball that provides a higher Pokémon catch rate than a standard Poké Ball. ", img: "https://archives.bulbagarden.net/media/upload/b/bf/Dream_Great_Ball_Sprite.png", quantity: 0, price: 1000, total: 0 },
        { item: "Ultra Ball", use: "An ultra-performance Ball that provides a higher Pokémon catch rate than a Great Ball.", img: "https://archives.bulbagarden.net/media/upload/a/a8/Dream_Ultra_Ball_Sprite.png", quantity: 0, price: 1000, total: 0 }
    ]);

    const [isModal, setIsModal] = useState(() => false);
    const [selectedItem, setSelectedItem] = useState({});
    const changeModal = (e) => {
        setIsModal(!isModal);
        if (isModal) return;
        const item = product[e.target.parentNode.dataset.index];
        setSelectedItem(item)
    }

    return (
        <div className="container">
            {product.map((curr, index) => {
                return (
                    <div key={index} data-index={index}>
                        <img src={curr.img} className="items-img" />
                        <h2>{curr.item}</h2>
                        <button className="btn btn-primary"
                            onClick={changeModal}>Buy Now</button>
                    </div>
                )
            })}
            {
                isModal && (
                    <Modal close={changeModal} product={selectedItem} addToCart={props.addToCart} />
                )
            }
        </div>
    )
}

export default Items;



