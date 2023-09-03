import { constants } from '../../data/constants';
import {
    ICategoryResp,
    IProductResp,
    ISubCategoryResp,
} from '../../pages/catalog/interfaces/categoryResponse/categoryResponseInterface';
import { QueryAllCategories } from '../categories/QueryAllCategories';
// import { AllProductDetailsGQL } from '../products/AllProductDetailsGQL';
// import { QueryAllProducts } from '../products/QueryAllProducts';
import { QueryProductProjections } from '../products/QueryProductProjections';
import { ICategoryResponse } from './interfaces';

export const categoryResponse: ICategoryResp[] = [];

export async function categoryStructuring() {
    const allCategories = new QueryAllCategories();
    const allProducts = new QueryProductProjections();

    try {
        const categories = await allCategories.getCategories();
        console.log('Categories:', categories);

        const products = await allProducts.getAllProducts();
        const productIds: string[] = products.map((product: { id: string }) => product.id);

        console.log('All Products:', productIds);

        constants.productList = [];

        categories.forEach((category: ICategoryResponse) => {
            const newCategory = {
                id: category.id,
                name: category.name,
                subcategories: [],
            };

            if (category.ancestors.length === 0) {
                categoryResponse.push(newCategory);
            }

            categoryResponse.forEach((cat) => {
                if (cat.id === category.parent?.id) {
                    const newSubCategory: ISubCategoryResp = {
                        id: category.id,
                        name: category.name,
                        products: [],
                    };
                    cat.subcategories.push(newSubCategory);
                    // Assign products to subcategory
                    products.forEach((product: IProductResp) => {
                        if (product.categories[0].id === category.id) {
                            constants.productList.push(product);
                            newSubCategory.products.push(product);
                        }
                    });
                }
            });
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }

    return categoryResponse;
}
