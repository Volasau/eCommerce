import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { ICategoryResponse, ICategoryResponseResult } from '../function/interfaces';

export class QueryAllCategories {
    async getCategories(): Promise<ICategoryResponseResult[]> {
        const res: Response = await request.getAuth(constants.categoryEndpoint);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data: ICategoryResponse = await res.json();
        return data.results;
    }
}
