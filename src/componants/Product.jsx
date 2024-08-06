import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <Link to={'/ProductDetails'}>
        <div
          className="card bg-dark text-white"
          style={{ width: 300, height: 300 }}
        >
          <img
            src="..."
            className="card-img-top"
            alt="PRODUCT IMAGE HERE"
            width={150}
            height={150}
          />
          <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <p className="card-text">
              Some quick example text to build on the card title.
            </p>
            <p className="card-text">Price</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Product;
