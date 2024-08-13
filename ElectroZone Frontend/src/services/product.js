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
        const response = await axios.get(`/products/category/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
};

// Fetch products by categoryId
export const getProductsByCategoryId = async (categoryId) => {
    try {
        const response = await axios.get(`http://localhost:8080/products/category/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products by categoryId:', error);
        return null;
    }
};

// Fetch products by brandId
export const getProductsByBrandId = async (brandId) => {
    try {
        const response = await axios.get(`http://localhost:8080/products/brand/${brandId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products by brandId:', error);
        return null;
    }
};
