import { Product } from '@commercetools/platform-sdk';
import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';

export class GetProduct {
    async getProductById(productId: string): Promise<Product> {
        const productEndpoint = `${constants.apiUrl}/products/${productId}`;

        try {
            const response: Response = await request.getAuth(productEndpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const productData: Product = await response.json();
            return productData;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export async function getProductsId(productId: string): Promise<Product | null | undefined> {
    try {
        if (productId) {
            const getProductManager = new GetProduct();
            const getProductResponse: Product | null = await getProductManager.getProductById(productId);
            return getProductResponse;
        } else {
            return;
        }
    } catch (error) {
        console.error(error);
    }
}
