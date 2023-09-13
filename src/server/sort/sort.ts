import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { IProductsData } from '../products/queryProductProjections';

export class ProductSort {
    async sortBy(value: string): Promise<IProductsData> {
        try {
            const fullUrl = `${constants.baseURL}?sort=${encodeURIComponent(value)}&limit=60`;
            const res: Response = await request.getAuth(fullUrl);
            const data: IProductsData = await res.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
