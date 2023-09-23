import { filterProductList } from '../pages/catalog/listeners/filterProductList';
import { clickListener } from './clickListener';

export function addListeners(): void {
    filterProductList();
    clickListener();
}
