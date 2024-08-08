import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../features/cartSlice";

function WishListItem() {
  // used to update the state
  const dispatch = useDispatch();

  const cancelBooking = () => {
    dispatch(removeFromCartAction());
  };

  return (
    <div className="col-4" style={{ display: "inline-block", padding: 10 }}>
      <div className="card bg-dark text-white">
        <img
          style={{ height: 300 }}
          className="card-img-top"
          // src={`${config.url}/image/${property.profileImage}`}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">ABC</h5>
          <p className="card-text">PQR</p>
          <div style={{ fontWeight: 600 }}>XYZ</div>
          <br />
          <div className="col-12">
            <div className="row">
              <div className="col-6 text-center">
                <button onClick={cancelBooking} className="btn btn-success">
                  Add To Cart
                </button>
              </div>
              <div className="col-6 text-center">
                <button onClick={cancelBooking} className="btn btn-danger ">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishListItem;
