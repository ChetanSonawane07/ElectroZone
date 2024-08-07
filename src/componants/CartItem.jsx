import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../features/cartSlice";

function CartItem() {

  // used to update the state
  const dispatch = useDispatch();

  const cancelBooking = () => {
    dispatch(removeFromCartAction());
  };

  return (
    <div className="col-3" style={{ display: "inline-block", padding: 10 }}>
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
          <button
            onClick={cancelBooking}
            style={{ position: "absolute", right: 15, bottom: 15 }}
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
