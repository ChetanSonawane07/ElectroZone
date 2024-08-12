import { useState } from "react";

function AddAddress() {
  const [name,setName] = useState('')
  const [phoneNo,setPhoneNo] = useState('')
  const [addressLine1,setAddressLine1] = useState('')
  const [addressLine2,setAddressLine2] = useState('')
  const [landmark,setLandmark] = useState('')
  const [city,setCity] = useState('')
  const [state,setState] = useState('')
  const [pincode,setPincode] = useState('')
  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-4 col-lg-12">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center bg-dark text-white">
                  <h3 className="mb-5">My Addresses</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <h4>Add New Address</h4>
                      <hr />
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="typeNameX-2"
                          className="form-control form-control-lg"
                          placeholder="Enter Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="tel"
                          id="typeNameX-2"
                          className="form-control form-control-lg"
                          placeholder="Enter Phone Number"
                          onChange={(e) => setPhoneNo(e.target.value)}
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="typeNameX-2"
                          className="form-control form-control-lg"
                          placeholder="Enter Address Line 1"
                          onChange={(e) => setAddressLine1(e.target.value)}
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="typeEmailX-2"
                          className="form-control form-control-lg"
                          placeholder="Enter Address Line 2"
                          onChange={(e) => setAddressLine2(e.target.value)}
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="typeEmailX-2"
                          className="form-control form-control-lg"
                          placeholder="Enter Landmark"
                          onChange={(e) => setLandmark(e.target.value)}
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="typePasswordX-2"
                          className="form-control form-control-lg"
                          placeholder="Enter City"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="typePasswordX-2"
                          className="form-control form-control-lg"
                          placeholder="Enter State"
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="number"
                          id="typePhoneX-2"
                          className="form-control form-control-lg"
                          placeholder="Enter Pin Code"
                          onChange={(e) => setPincode(e.target.value)}
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
                    </div>
                    <div className="col-lg-6">
                      <h4>Saved Addresses</h4>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddAddress;
