
import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080/wishlist'; 

export const addProductToWishlist = async (wishlistDTO) => {
    try {
      // Send POST request to the backend endpoint
      const response = await axios.post(`${API_BASE_URL}/add`, wishlistDTO, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Return response on success
      return response;
    } catch (error) {
      // Log error and throw it to be handled by the caller
      console.error('Failed to add product to wishlist:', error);
      throw error;
    }
  };