function OrderItem() {
  return (
    <div>
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-3">
                <div className="img-left"></div>
              </div>
              <div className="col-3">
                <p>Item Name</p>
                <p>Seller Name</p>
                <p>Item Price</p>
              </div>
              <div className="col-3">
                Estimate Delivery Date / Delivered Date
              </div>
              <div className="col-3">Delivery Status</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
