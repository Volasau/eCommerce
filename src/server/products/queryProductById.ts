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

export function getProductsId(): Promise<Product> {
    return new Promise((resolve, reject) => {
        const clickHandler = async (event: Event): Promise<void> => {
            try {
                const target = event.target as HTMLButtonElement;
                const indexOfJunkStr: number = target.id.lastIndexOf('-cart');
                const productId: string | null = indexOfJunkStr !== -1 ? target.id.substring(0, indexOfJunkStr) : null;

                if (productId) {
                    const getProductManager = new GetProduct();
                    const getProductResponse: Product | null = await getProductManager.getProductById(productId);

                    if (getProductResponse) {
                        resolve(getProductResponse);
                    } else {
                        reject('Product not found');
                    }
                } else {
                    return;
                }
            } catch (error) {
                reject(error);
            }
        };

        document.addEventListener('click', clickHandler);
    });
}
