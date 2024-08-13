import axios from 'axios';

export const getCartByUserId = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:8080/cart/${userId}`);
        return response.data; // Assuming this returns an array of cart items
    } catch (error) {
        console.error('Error fetching cart details:', error);
        return [];
    }
};
