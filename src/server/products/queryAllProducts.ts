import { constants } from '../../data/constants';
import { IProductResp } from '../../pages/catalog/interfaces/categoryResponse/categoryResponseInterface';
import { request } from '../classes/requestClass';

export class QueryAllProducts {
    async getAllProducts(): Promise<IProductResp[]> {
        const response = await request.getAuth(constants.productsEndpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
    }
}
