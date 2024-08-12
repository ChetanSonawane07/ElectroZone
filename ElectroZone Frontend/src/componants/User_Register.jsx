import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function User_Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const onRegister = () => {
    if (name.length == 0) {
      toast.warning("Name is mandatory");
    } else if (email.length == 0) {
      toast.warning("Email is mandatory");
    } else if (phoneNumber.length == 0) {
      toast.warning("Phone Number is mandatory");
    } else if (password.length == 0) {
      toast.warning("Password is mandatory");
    } else if (confirmpassword.length == password.length) {
      toast.warning("Password should be same");
    }
  };
  return (
    <div>
      {/* <!-- Section: Design Block --> */}
      <section className="">
        {/* <!-- Jumbotron --> */}
        <div className="px-4 py-5 px-md-5 text-center text-lg-start bg-white">
          <div className="jumbotron">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The ultimate destination <br />
                  <span className="text-success">
                    for every Technology Lover
                  </span>
                </h1>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card ">
                  <div className="card-body py-5 px-md-5 bg-dark text-white justify-content-center">
                    <div style={{ textAlign: "center" }}>
                      <h3>Register</h3>
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
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* <!-- Email input --> */}
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          placeholder="Enter Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* <!-- Phone input --> */}
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="tel"
                          id="form3Example3"
                          className="form-control"
                          placeholder="Enter Phone Number"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>

                      {/* <!-- Password input --> */}
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          placeholder="Confirm Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>

                      <div className="align-items-center">
                        <p>
                          Already registered ?{" "}
                          <Link to={"/User-Login"}>Login Here</Link>
                        </p>
                      </div>

                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block mb-4 align-items-center"
                        onClick={onRegister}
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
}

export default User_Register;
