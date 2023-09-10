import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';

export class ProductSearchManager {
    async searchProducts(query: string) {
        const fullUrl = `${constants.baseURL}?fuzzy=true&limit=60&text.en=${encodeURIComponent(query)}`;

        try {
            const response = await request.get(fullUrl);

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error searching customers:', error);
            throw error;
        }
    }
}
