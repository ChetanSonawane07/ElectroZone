import { useEffect, useState } from "react";
import { fetchCategories, deleteCategory } from "../services/admin"; // Assuming these functions are implemented

function AdminCategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetchCategories();
      console.log(response) // Fetch the list of categories from the backend
      setCategories(response.data); 
    };
    getCategories();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      await deleteCategory(id); // Delete the category using its ID
      setCategories(categories.filter((category) => category.id !== id)); // Update the state to remove the deleted category
    }
  };

  const handleUpdate = (id) => {
    // Navigate to the update page or open an update form
    // You can pass the category ID to the update form/page
    window.location.href = `/admin/update-category/${id}`;
  };

  return (
    <div>
      <div className="container col-lg-12">
        <table className="table table-responsive table-striped bg-dark text-white text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.title}</td>
                <td>
                  <img src={category.image} alt={category.title} style={{ width: "50px", height: "50px" }} />
                </td>
                <td>{category.description}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleUpdate(category.id)}>
                    Update
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(category.id)}>
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

export default AdminCategoryList;
