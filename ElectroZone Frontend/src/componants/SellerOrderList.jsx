import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SellerOrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Assuming sellerId is available
    const sellerId = sessionStorage.getItem('sellerId'); // Replace with actual seller ID
    // axios.get(`http://localhost:3000/order/${sellerId}`)
    //   .then(response => {
    //     setOrders(response.data);
    //   })
    //   .catch(error => {
    //     console.error("There was an error fetching the orders!", error);
    //   });
  }, []);

  return (
    <div>
      <div className="container col-lg-12">
        <table className="table table-responsive table-striped bg-dark text-white text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Buyer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Payment Status</th>
              <th>Purchase Date</th>
              <th>Delivery Date</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.user.name}</td>
                <td>{order.product.name}</td>
                <td>{order.quantity}</td>
                <td>{order.payment.status}</td>
                <td>{order.order.purchaseDate}</td>
                <td>{order.order.deliveryDate}</td>
                <td>{order.order.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SellerOrderList;
