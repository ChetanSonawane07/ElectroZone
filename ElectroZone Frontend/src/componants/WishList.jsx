import React, { useEffect, useState } from 'react';
import WishlistItem from './WishLIstItem';
import { useDispatch } from 'react-redux';
import { getProductsInWishlist } from '../services/wishlist';
import { updateWishlistAction } from '../features/wishlistSlice';
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const userId = sessionStorage.getItem('id'); // Replace with actual user ID
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const items = await getProductsInWishlist(userId);
        setWishlistItems(items || []);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
        setWishlistItems([]);
      }
    };
    fetchWishlistItems();
  }, [userId]);

  const handleAddToCart = (id) => {
    // This function can be used to update the state or handle any additional logic after adding to cart
  };

  const handleRemove = (id) => {
    const updatedItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedItems);
    dispatch(updateWishlistAction(updatedItems));
  };

  return (
    <div>
      <div className="container">
        <h4>Your Wishlist</h4>
        <div className="row">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <WishlistItem
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
                onRemove={handleRemove}
              />
            ))
          ) : (
            <p>Your wishlist is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
