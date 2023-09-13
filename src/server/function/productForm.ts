import { constants } from '../../data/constants';
import {
    IAllVariants,
    IAttributes,
    ICategories,
    IImages,
    IPricesStr,
    IProduct,
    IProductProjection,
    IProductsData,
    IVariantObj,
} from '../../server/products/queryProductProjections';

export function productForm(data: IProductsData): IProduct[] {
    const productsWithAttributes: IProduct[] = data.results.map((product: IProductProjection) => {
        const categoriesArr: ICategories[] = [...product.categories];
        const variantObjs: IVariantObj[] = product.variants.map((variant) => {
            const { attributes, images, prices } = variant;

            const variantObj: IVariantObj = {
                variantAttr: attributes ? [...attributes] : [],
                variantImg: images ? [...images] : [],
                variantPrices: prices ? [...prices] : [],
            };

            return variantObj;
        });

        const allVarAttrArr: IAttributes[] = variantObjs.reduce((acc: IAttributes[], variant: IVariantObj) => {
            if (variant.variantAttr) {
                acc.push(...variant.variantAttr);
            }
            return acc;
        }, []);
        const allVarImgArr: IImages[] = variantObjs.reduce((acc: IImages[], variant) => {
            if (variant.variantImg) {
                acc.push(...variant.variantImg);
            }
            return acc;
        }, []);
        const allVarPricesArr: IPricesStr[] = variantObjs.reduce((acc: IPricesStr[], variant) => {
            if (variant.variantPrices) {
                acc.push(...variant.variantPrices);
            }
            return acc;
        }, []);

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

        const productObj: IProduct = {
            id: product.id,
            name: product.name.en,
            description: product.description.en,
            categories: categoriesArr,
            allVariants,
        };
        return productObj;
    });
    constants.productList = [];
    productsWithAttributes.forEach((product: IProduct) => {
        constants.productList.push(product);
    });
    return productsWithAttributes;
}
