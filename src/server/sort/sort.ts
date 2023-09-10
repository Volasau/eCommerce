import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';

export class ProductSort {
    async sortBy(value: string) {
        try {
            const fullUrl = `${constants.baseURL}?sort=${encodeURIComponent(value)}&limit=60`;
            const res = await request.getAuth(fullUrl);
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
