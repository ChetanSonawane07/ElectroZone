import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/product';

function ProductDetails() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct(id);
  }, [id]);
  const fetchProduct = async (id) => {
    try {
      const result = await getProductById(id);
      console.log(result)
      if (result) {

        const productWithImage = {
          ...result,
          image: result.image ? `data:image/${result.imageFormat || 'jpeg'};base64,${result.image}` : null,
        };        
        
        setProduct(productWithImage );
      } else {
        console.error('Failed to load product details:', result.message);
      }
    } catch (error) {
      console.error('Failed to load product details:', error);
    }
  };
  const goToCart = () => {
    navigate('/Cart');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <div className="container">
        <div className="row">
        <div
            className="card col-6"
            style={{ height: 400, borderRadius: 20 }}
          >
            <img
              src={product.image || 'path/to/default-image.jpg'}
              className="card-img-top"
              alt={product.name}
              style={{ borderRadius: 20, height: '100%' }}
            />
          </div>

          <div className="card col-6 border-white">
            <div>
              <h3>{product.name}</h3>
              <h3><strike>${product.mrp}</strike></h3>
              <h3>${product.mrp - product.discount}</h3>
              <p>{product.description}</p>
              <p>Warranty: {product.warranty} months</p>
              <select className="btn">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-success">
                Add to WishList
              </button>
              <br /><br />
              <button className="btn btn-success">Add to Cart</button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <button
            className="bg-success align-items-center text-white"
            style={{
              height: 40,
              width: 'max',
              textAlign: 'center',
              borderRadius: 10,
            }}
            onClick={goToCart}
          >
            Go To Cart
          </button>
        </div>
        <br />
        <div className="row">
          <div className="col-6 card border-white">
            <h3 className="text-center">Review Product</h3>
            <form>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="form-outline">
                    <textarea
                      className="form-control"
                      placeholder="Enter Review"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-4 btn">
                  <div className="form-outline">
                    <input
                      type="submit"
                      className="form-control"
                      value="Submit"
                    />
                  </div>
                </div>
                <div className="col-md-4 mb-4"></div>
                <div className="col-md-3 mb-4 btn">
                  <div className="form-outline">
                    <input
                      type="submit"
                      className="form-control"
                      value="Cancel"
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
