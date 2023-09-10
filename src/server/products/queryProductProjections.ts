import { constants } from '../../data/constants';
import { IProductResp } from '../../pages/catalog/interfaces/categoryResponse/categoryResponseInterface';
import { request } from '../classes/requestClass';
import {
    IAllVariants,
    IAttributes,
    ICategories,
    IImages,
    IPricesStr,
    IProduct,
    IProductProjection,
    IVariantProps,
} from '../interfaces/productProjectionInterface';

export class QueryProductProjections {
    async getAllProducts(): Promise<IProductResp[]> {
        try {
            const url = `${constants.apiUrl}/product-projections?limit=60`;
            const response = await request.getAuth(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.statusText}`);
            }

            const data = await response.json();

            const productsWithAttributes: IProductResp[] = data.results.map((product: IProductProjection) => {
                const categoriesArr: ICategories[] = [...product.categories];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const variants: any[] = [];
                product.variants.map((variant) => {
                    const { attributes, images, prices } = variant;
                    const variantAttr: IAttributes[] = [...attributes];
                    const variantImg: IImages[] = [...images];
                    const variantPrices: IPricesStr[] = [...prices];

                    const variantProps: IVariantProps = {
                        variantAttr,
                        variantImg,
                        variantPrices,
                    };

                    variants.push(variantProps);
                });

                const allVarAttrArr: IAttributes[] = [
                    ...variants.reduce((acc, variant) => [...acc, ...variant.variantAttr], []),
                ];
                const allVarImgArr: IImages[] = [
                    ...variants.reduce((acc, variant) => [...acc, ...variant.variantImg], []),
                ];
                const allVarPricesArr: IPricesStr[] = [
                    ...variants.reduce((acc, variant) => [...acc, ...variant.variantPrices], []),
                ];

                const allVariants: IAllVariants[] = [
                    {
                        attributesRaw: product.masterVariant.attributes,
                        images: product.masterVariant.images,
                        prices: product.masterVariant.prices,
                    },
                    {
                        attributesRaw: allVarAttrArr,
                        images: allVarImgArr,
                        prices: allVarPricesArr,
                    },
                ];

                const productProps: IProduct = {
                    id: product.id,
                    name: product.name.en,
                    description: product.description.en,
                    categories: categoriesArr,
                    allVariants,
                };
                return productProps;
            });
            return productsWithAttributes;
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
}
