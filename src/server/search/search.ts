import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { IProductsData } from '../products/queryProductProjections';

export class ProductSearchManager {
    async searchProducts(query: string): Promise<IProductsData> {
        const fullUrl = `${constants.baseURL}?fuzzy=true&limit=60&text.en=${encodeURIComponent(query)}`;

        try {
            const response: Response = await request.get(fullUrl);

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data: IProductsData = await response.json();
            return data;
        } catch (error) {
            console.error('Error searching customers:', error);
            throw error;
        }
    }
}
