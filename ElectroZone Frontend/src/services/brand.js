import axios from 'axios';

export async function getBrands() {
    try {
        const response = await axios.get('http://localhost:8080/brands/viewBrands');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return { status: 'error', message: 'Failed to fetch categories' };
    }
}
