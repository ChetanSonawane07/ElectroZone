import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import ProductList from "./ProductList";
import BrandList from "./BrandList"

initMDB({ Dropdown, Collapse });
function Products() {
  return (
    <div>
      <div
        className="card bg-dark col-12 container"
        style={{
          height: 400,
          borderRadius: 20,
        }}
      ></div>

      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <div className="vertical-nav bg-dark" style={{height:170}}>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed bg-dark text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Brands
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Here, brand name will appear to add filter.
                    </div>
                  </div>
                </div>
                <div class="accordion-item ">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed bg-dark text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Price
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <input
                        type="range"
                        name="price"
                        id="price"
                        min={10000}
                        max={1000000}
                      />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed bg-dark text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Availability
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <input
                        type="checkbox"
                        name="outofstock"
                        id="outofstock"
                      />{" "}
                      Include out of Stock
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <ProductList />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <BrandList/>
      </div>
    </div>
  );
}

export default Products;
