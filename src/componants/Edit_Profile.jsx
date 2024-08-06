import { Link } from "react-router-dom";
function Edit_Profile() {
  return (
    <div>
      <section >
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center bg-dark text-white">
                  <h3 className="mb-5">Edit Profile</h3>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="text"
                      id="typeNameX-2"
                      className="form-control form-control-lg"
                      placeholder="Enter First Name"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="text"
                      id="typeNameX-2"
                      className="form-control form-control-lg"
                      placeholder="Enter Last Name"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      value="Email from session storage"
                      disabled
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Enter Password"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="tel"
                      id="typePhoneX-2"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone Number"
                    />
                  </div>

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-success btn-lg btn-block"
                    type="submit"
                  >
                    Submit
                  </button>

                  <hr />

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-danger btn-lg btn-block"
                    type="submit"
                  >
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Edit_Profile;
