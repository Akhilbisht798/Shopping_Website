import React, { useState, useEffect } from "react";
import "../style/OrderCompleted.css"

const OrderComplete = () => {
    return (
        <div className="order-Complete">
            <div className="order-complete-inside">
                <p>Thanks for Ordering! Please Wait while your Order is processing.</p>
            </div>
        </div>
    )
}

export default OrderComplete;