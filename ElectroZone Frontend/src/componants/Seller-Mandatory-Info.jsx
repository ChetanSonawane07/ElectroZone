import { useState } from "react";

function MandatoryInfo() {
  const [GSTINNo,setGSTINNo] = useState('')
  const [bankAccount,setBankAccount] = useState('')
  const [IFSCode,setIFSCode] = useState('')
  const [branch,setBranch] = useState('')
  const [address,setAddress] = useState('')

  return (
    <div className="col-lg-12 mb-5 mb-lg-0">
      <div className="card">
        <div className="card-body py-5 px-md-5 bg-dark text-white justify-content-center">
          <div style={{ textAlign: "center" }}>
            <h3>Additional Information</h3>
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
                    placeholder="Enter GSTIN Number"
                    onChange={(e) => setGSTINNo(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="number"
                id="form3Example3"
                className="form-control"
                placeholder="Enter Bank Account Number"
                onChange={(e) => setBankAccount(e.target.value)}
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="text"
                id="form3Example4"
                className="form-control"
                placeholder="Enter IFSC Number"
                onChange={(e) => setIFSCode(e.target.value)}
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="text"
                id="form3Example4"
                className="form-control"
                placeholder="Enter Branch Name"
                onChange={(e) => setBranch(e.target.value)}
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <textarea
                type="text"
                id="form3Example4"
                className="form-control"
                placeholder="Enter Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-success btn-block mb-4 align-items-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MandatoryInfo;