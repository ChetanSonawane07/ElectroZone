import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCartAction } from '../features/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity); // Initialize state with item quantity

  if (!item) return <p>Loading...</p>;

  // Check if item.price is defined and is a number
  const price = item.mrp - item.discount || 0; // Default to 0 if price is undefined
  const imageSrc = item.image ? `data:image/${item.imageFormat || 'jpeg'};base64,${item.image}` : 'path/to/default-image.jpg';

  const removeFromCart = () => {
    dispatch(removeFromCartAction(item.id));
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

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
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text font-weight-bold">${price.toFixed(2)}</p>
          <p className="card-text">Quantity:
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>-</button>
              <input
                type="text"
                className="form-control mx-2"
                value={quantity}
                readOnly
                style={{ width: '60px', textAlign: 'center' }}
              />
              <button className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
            </div>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              onClick={removeFromCart}
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

export default CartItem;
