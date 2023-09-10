import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { ICategoryResponse } from '../function/interfaces';

export class QueryAllCategories {
    async getCategories(): Promise<ICategoryResponse[]> {
        const res = await request.getAuth(constants.categoryEndpoint);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data.results;
    }
}
