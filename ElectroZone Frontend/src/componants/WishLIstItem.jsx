import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { addProductToCart } from '../services/cart';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8080';

function WishlistItem({ item, onRemove }) {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the product is in the cart
    const checkIfInCart = async () => {
      try {
        // Replace with actual user ID and product ID for the API request
        const userId = sessionStorage.getItem('id');
        const response = await axios.get(`${API_BASE_URL}/cart/${userId}`);
        const cartItems = response.data;
        const isProductInCart = cartItems.some(cartItem => cartItem.id === item.id);
        setIsInCart(isProductInCart);
      } catch (error) {
        console.error('Failed to check if product is in cart:', error);
      }
    };

    checkIfInCart();
  }, [item.id]);

  const addToCart = async () => {
    try {
      const cartDTO = {
        productId: item.id,
        userId: sessionStorage.getItem('id'), // Replace with actual user ID
        quantity: 1, // Assuming default quantity is 1
      };
      await addProductToCart(cartDTO);
      setIsInCart(true);
      toast.success("Product Added to Cart Successfully");
    } catch (error) {
      toast.error("Failed to Add Product to Cart");
    }
  };

  const removeFromWishlist = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/wishlist/remove`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          userId: sessionStorage.getItem('id'), // Pass userId and productId to identify the item
          productId: item.id,
        },
      });

      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item.id });

      if (onRemove) {
        onRemove(item.id); // Notify the Wishlist component to remove the item from the list
      }

      toast.success('Item removed from wishlist successfully');
    } catch (error) {
      toast.error('Failed to remove item from wishlist');
      console.error('Failed to remove item from wishlist:', error);
    }
  };

  const price = item.mrp - item.discount || 0;
  const imageSrc = item.image ? `data:image/${item.imageFormat || 'jpeg'};base64,${item.image}` : 'path/to/default-image.jpg';

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={imageSrc}
          className="card-img-top"
          alt={item.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <hr />
          <p className="card-text">{item.description}</p>
          <p className="card-text font-weight-bold">${price.toFixed(2)}</p>
          <div className="d-flex justify-content-between align-items-center">
            {isInCart ? (
              <button
                className="btn btn-success"
                onClick={() => navigate('/cart')}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            )}
            <button
              onClick={removeFromWishlist}
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistItem;
