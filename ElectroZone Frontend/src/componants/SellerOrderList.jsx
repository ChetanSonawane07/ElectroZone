function SellerOrderList() {
  return (
    <div>
      <div className="container col-lg-12">
        <table className="table table-responsive table-striped bg-dark text-white text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Buyer</th>
              <th>Product</th>
              <th>Payment Status</th>
              <th>Purchase Date</th>
              <th>DeliveryDate</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default SellerOrderList;
