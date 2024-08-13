import axios from "axios"

export async function login(email, password) {
    // body parameters
    const body = {
      email,
      password,
    }
  
    // make API call
    const response = await axios.post(`http://localhost:8080/admin/login`, body)
  
    // read JSON data (response)
    return response.data
  }

  export async function addCategory(title,description,image) {
    // body parameters
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image); // Image file is appended here
  
    // make API call
    const response = await axios.post(`http://localhost:8080/categories/addcategory`, formData,{
      headers: {
        "Content-Type": "multipart/form-data", // Ensure proper headers for file upload
      },
    });
  
    // read JSON data (response)
    return response
  }

  export async function addBrand(name,image) {
    // body parameters
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image); // Image file is appended here
  
    // make API call
    const response = await axios.post(`http://localhost:8080/brands/addbrand`, formData,{
      headers: {
        "Content-Type": "multipart/form-data", // Ensure proper headers for file upload
      },
    });
  
    // read JSON data (response)
    return response
  }