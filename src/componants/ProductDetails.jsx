function ProductDetails() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="card bg-dark col-6"
            style={{
              height: 400,
              borderRadius: 20,
            }}
          ></div>
          <div className="card col-6 border-white">
            <div>
              <h3>Name</h3>
              <h3>
                <strike>MRP</strike>
              </h3>
              <h3>MRP - Discount</h3>
              <p>Description</p>
              <p>Warranty</p>
              <select name="" id="" className="btn">
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-success">
                Add to WishList
              </button>
              <br />
              <br />
              <button className="btn btn-success">Add to Cart</button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <button
            className=" bg-success align-items-center text-white"
            style={{
              height: 40,
              width: "max",
              textAlign: "center",
              borderRadius: 10,
            }}
          >
            Go To Cart
          </button>
        </div>

        <br />

        <div className="row ">
          <div className="col-6 card border-white">
            <h3 className="text-center">Review Product</h3>
            <form>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div data-mdb-input-init className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div data-mdb-input-init className="form-outline">
                    <textarea
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      placeholder="Enter Review"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-4 btn">
                  <div data-mdb-input-init className="form-outline">
                    <input
                      type="submit"
                      id="form3Example1"
                      className="form-control"
                      value={"Submit"}
                    />
                  </div>
                </div>
                <div className="col-md-4 mb-4"></div>
                <div className="col-md-3 mb-4 btn">
                  <div data-mdb-input-init className="form-outline">
                    <input
                      type="submit"
                      id="form3Example1"
                      className="form-control"
                      value={"Cancel"}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-6 text-center border-white card">
            <h3>Reviews</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
