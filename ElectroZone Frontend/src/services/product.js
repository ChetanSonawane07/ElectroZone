import axios from 'axios';

export const getProducts = async () => {
    try {
        const response = await axios.get('/api/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
};

export const getProductByName = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/products/category/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
};
