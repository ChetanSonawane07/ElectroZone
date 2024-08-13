import { useEffect, useState } from "react";
import { fetchSellerProducts, updateProduct, deleteProduct } from "../services/seller"; 

function SellerProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchSellerProducts(sessionStorage.sellerId);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter(product => product.id !== productId)); // Update local state
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdate = async (productId, updatedData) => {
    try {
      const response = await updateProduct(productId, updatedData);
      setProducts(products.map(product => 
        product.id === productId ? response.data : product
      ));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <div className="container col-lg-12">
        <table className="table table-responsive table-striped bg-dark text-white text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>MRP</th>
              <th>Discount</th>
              <th>Quantity</th>
              <th>Warranty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </td>
                  <td>{product.mrp}</td>
                  <td>{product.discount}</td>
                  <td>{product.quantity}</td>
                  <td>{product.warranty}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => handleUpdate(product.id, {/* updated data */})}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SellerProductList;
