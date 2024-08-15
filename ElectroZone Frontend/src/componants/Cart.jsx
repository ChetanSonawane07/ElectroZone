import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { getCartByUserId, updateCartInBackend } from '../services/cart';
import { updateCartAction } from '../features/cartSlice';
import { useNavigate } from "react-router-dom";
import {updateAmount} from "../features/grandTotal";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);
    const userId = sessionStorage.getItem('id'); // Replace with actual user ID
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const calculateGrandTotal = (items) => {
        return items.reduce((total, item) => {
            const price = item.mrp - item.discount || 0;
            return total + (price * item.quantity);
        }, 0);
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCartByUserId(userId);
                setCartItems(items || []);
                setGrandTotal(calculateGrandTotal(items || []));
            } catch (error) {
                console.error('Error fetching cart items:', error);
                setCartItems([]);
            }
        };
        fetchCartItems();
    }, [userId]);

    const handleQuantityChange = (id, newQuantity) => {
        const updatedItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedItems);
        setGrandTotal(calculateGrandTotal(updatedItems));
    };

    const handleRemove = (id) => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
        setGrandTotal(calculateGrandTotal(updatedItems));
    };

    const proceedToCheckout = async () => {
        try {
            console.log("inside proceed to checkout",amount);

            dispatch(updateCartAction(cartItems));

            const cartDTOs = cartItems.map(item => ({
                userId: userId,
                productId: item.id,
                quantity: item.quantity
            }));

            console.log(cartDTOs)

            await updateCartInBackend(cartDTOs);
            dispatch(updateAmount(grandTotal))

           


            console.log('Cart updated and ready for checkout!');
            navigate('/Checkout');
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div>
            <div className="container">
                <h4>Your Cart</h4>
                <div className="row">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onQuantityChange={handleQuantityChange}
                                onRemove={handleRemove}
                            />
                        ))
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
            <div
                className="container bg-white text-dark align-middle card border"
                style={{ height: 60, borderRadius: 10 }}
            >
                <div className="row">
                    <div className="col-9" style={{ verticalAlign: "middle", marginTop: 10 }}>
                        Grand Total: ₹{grandTotal.toFixed(2)}
                    </div>
                    <div className="col-3">
                        <button className="btn btn-warning" style={{ verticalAlign: "middle", marginTop: 10 }} onClick={proceedToCheckout}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
