import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function SuperCoins() {
    // 1) Local state for how many coins they’ll earn
    const [superCoins, setSuperCoins] = useState(0);

    // 2) Pull cart items from Redux
    const cartItems = useSelector(state => state.cart.cartItems);

    // 3) Compute the total cart value
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // 4) Update superCoins whenever totalAmount changes
    useEffect(() => {
        if (totalAmount >= 300) {
            setSuperCoins(30);
        } else if (totalAmount >= 200) {
            setSuperCoins(20);
        } else if (totalAmount >= 100) {
            setSuperCoins(10);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);

    // 5) Render the UI
    return (
        <div className="super-coins" style={{ textAlign: 'center' }}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">
                You will earn {superCoins} super coins with this purchase.
            </p>
        </div>
    );
}

export default SuperCoins;
