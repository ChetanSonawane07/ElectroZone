import BrandList from "./BrandList";

function MainPage() {
  return (
    <div>
      <div>
        <div
          className="bg-dark col-12 container"
          style={{
            height: 400,
            borderRadius: 20,
          }}
        >
        </div>

        <br />

        {/* OFFERS */}

        <div
          className="card bg-dark col-12 container"
          style={{
            height: 150,
            borderRadius: 20,
          }}
        ></div>
        <br />
        <div className="container">
          <div className="row">
            <div
              className="card bg-dark col-6 "
              style={{
                height: 150,
                borderRadius: 20,
              }}
            ></div>

            <div
              className="card bg-dark col-6 "
              style={{
                height: 150,
                borderRadius: 20,
              }}
            ></div>
          </div>
        </div>

        <BrandList />
      </div>
    </div>
  );
}

export default MainPage;
