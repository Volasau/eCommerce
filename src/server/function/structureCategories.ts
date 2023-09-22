import { constants } from '../../data/constants';
import {
    ICategoryResp,
    ISubCategoryResp,
} from '../../pages/catalog/interfaces/categoryResponse/categoryResponse.interfaces';
import { QueryAllCategories } from '../categories/queryAllCategories';
import { IProduct, QueryProductProjections } from '../products/queryProductProjections';
import { ICategoryResponseResult } from './interfaces';

export let categoryResponse: ICategoryResp[] = [];

export async function categoryStructuring(): Promise<ICategoryResp[]> {
    categoryResponse = [];
    const allCategories = new QueryAllCategories();
    const allProducts = new QueryProductProjections();

    try {
        const categories: ICategoryResponseResult[] = await allCategories.getCategories();

        const products: IProduct[] = await allProducts.getAllProducts();

        constants.productList = [];

        categories.forEach((category: ICategoryResponseResult) => {
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
                    products.forEach((product: IProduct) => {
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
