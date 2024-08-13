import axios from "axios";

export const register = async (name,email,phoneNo,password) => {
    const body = {
        name,email,password,phoneNo
    }

    const response = await axios.post(`http://localhost:8080/api/sellers/register`,body);

    return response
}

export const login = async (email,password) => {
    const body = {
        email,password
    }

    const response = await axios.post(`http://localhost:8080/api/sellers/login`,body)
    return response
}

export const additionalInfo = async (id,gstNo,bankAccountNo,ifscNumber,branch,address) => {
    const body = {
        gstNo,bankAccountNo,ifscNumber,branch,address
    }

    const response = await axios.patch(`http://localhost:8080/api/sellers/additional-fields/${id}`,body)

    return response
}

export const fetchSeller = async (id) => {

    const response = await axios.get(`http://localhost:8080/api/sellers/${id}`)

    return response.data
}

export const addProduct = async (sellerId,name,description,image,category,brand,mrp,discount,quantity,warranty) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image); // Image file is appended here
    formData.append("description", description);
    formData.append("mrp", mrp);
    formData.append("discount", discount);
    formData.append("quantity", quantity);
    formData.append("warranty", warranty);
    formData.append("categoryId", category);
    formData.append("brandId", brand);
    formData.append("sellerId", sellerId);
  
    // make API call
    const response = await axios.post(`http://localhost:8080/products/addproduct`, formData,{
      headers: {
        "Content-Type": "multipart/form-data", // Ensure proper headers for file upload
      },
    });
  
    // read JSON data (response)
    return response
}



// Fetch products for a particular seller
export const fetchSellerProducts = async (sellerId) => {
  try {
    const response = await axios.get(`http://localhost:8080/products/${sellerId}`);
    return response; // Contains response.data with the list of products
  } catch (error) {
    console.error("Error fetching seller products:", error);
    throw error; // Rethrow error to be handled in the component
  }
};

// Update a product
export const updateProduct = async (productId, updatedProductData) => {
  try {
    const response = await axios.put(`/${productId}`, updatedProductData);
    return response; // Contains response.data with updated product details
  } catch (error) {
    console.error("Error updating product:", error);
    throw error; // Rethrow error to be handled in the component
  }
};

// Delete a product
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/products/delete/${id}`);
    return response; // Response indicates success (e.g., status 204 No Content)
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error; // Rethrow error to be handled in the component
  }
};
