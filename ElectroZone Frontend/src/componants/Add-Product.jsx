function AddProduct() {
  return (
    <div className="col-lg-12 mb-5 mb-lg-0">
      <div className="card">
        <div className="card-body py-5 px-md-5 bg-dark text-white justify-content-center">
          <div style={{ textAlign: "center" }}>
            <h3>Add Product</h3>
          </div>
          <br />
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row">
              <div className="col-md-12 mb-4">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                    placeholder="Enter Product Name"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Email input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <textarea
                type="text"
                id="form3Example3"
                className="form-control"
                placeholder="Enter Description"
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <p>Category :</p>
              <select
                id="form3Example3"
                className="form-control text-black"
                name="category"
                required
              >
                <option value="1" selected>
                  Select Category
                </option>
                <option value="1">One</option>
                <option value="1">Two</option>
              </select>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <p>Category :</p>
              <select
                id="form3Example3"
                className="form-control text-black"
                name="brand"
                required
              >
                <option value="1" selected>
                  Select Brand
                </option>
                <option value="1">One</option>
                <option value="1">Two</option>
              </select>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="number"
                id="form3Example4"
                className="form-control"
                placeholder="Enter Maximum Retail Price"
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="number"
                id="form3Example4"
                className="form-control"
                placeholder="Enter Discount price"
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="number"
                id="form3Example4"
                className="form-control"
                placeholder="Enter Quantity"
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="number"
                id="form3Example4"
                className="form-control"
                placeholder="Enter Warranty (in months)"
              />
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-success btn-block mb-4 align-items-center"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
