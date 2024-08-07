function AddCategory() {
  return (
    <div className="col-lg-12 mb-5 mb-lg-0">
      <div className="card">
        <div className="card-body py-5 px-md-5 bg-dark text-white justify-content-center">
          <div style={{ textAlign: "center" }}>
            <h3>Add Category</h3>
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
                    placeholder="Enter Name"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Email input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="text"
                id="form3Example3"
                className="form-control"
                placeholder="Enter description"
                
              />
            </div>

            {/* <!-- Phone input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="file"
                id="form3Example3"
                className="form-control"
                placeholder="Upload File"
                
              />
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-success btn-block mb-4 align-items-center"              
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
