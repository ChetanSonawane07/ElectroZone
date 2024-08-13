import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { getCartByUserId } from '../services/cart';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const userId = 1; // Replace with actual user ID

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCartByUserId(userId);
                console.log(items);
                setCartItems(items || []);
            } catch (error) {
                console.error('Error fetching cart items:', error);
                setCartItems([]);
            }
        };
        fetchCartItems();
    }, [userId]);

    return (
        <div>
            <div className="container">
                <h4>Your Cart</h4>
                <div className="row">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
