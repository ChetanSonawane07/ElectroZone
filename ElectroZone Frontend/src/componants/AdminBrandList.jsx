import { useEffect, useState } from "react";
import { fetchBrands, deleteBrand } from "../services/admin"; // Assume these functions are implemented

function AdminBrandList() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const response = await fetchBrands();
        console.log(response)
        setBrands(response); // Assuming response.data contains the array of brands
      } catch (error) {
        console.error("Error fetching brands:", error);
        setBrands([]); // Optionally set to an empty array in case of error
      }
    };
    getBrands();
  }, []);
  

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this brand?");
    if (confirmDelete) {
      await deleteBrand(id); // Delete the brand using its ID
      setBrands(brands.filter((brand) => brand.id !== id)); // Update the state to remove the deleted brand
    }
  };

  const handleUpdate = (id) => {
    // Navigate to the update page or open an update form
    // You can pass the brand ID to the update form/page
    window.location.href = `/admin/update-brand/${id}`;
  };

  return (
    <div>
      <div className="container col-lg-12">
        <table className="table table-responsive table-striped bg-dark text-white text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={brand.id}>
                <td>{index + 1}</td>
                <td>{brand.name}</td>
                <td>
                  <img src={brand.image} alt={brand.name} style={{ width: "50px", height: "50px" }} />
                </td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleUpdate(brand.id)}>
                    Update
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(brand.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBrandList;
