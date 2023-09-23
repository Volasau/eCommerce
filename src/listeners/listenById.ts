import { constants } from '../data/constants';
import { addClearModal } from '../pages/basket/functions/addClearModal';
import { doNotClearTheCart } from '../pages/basket/listeners/cartCleaner/doNotClearTheCart';
import { reallyClearTheCart } from '../pages/basket/listeners/cartCleaner/reallyClearTheCart';
import { copyPromoCode } from '../pages/basket/listeners/copyPromoCode';
import { searchByButton } from '../pages/catalog/listeners/searchProduct';
import { showFilter } from '../pages/catalog/listeners/showFilter';
import { sortByValue } from '../pages/catalog/listeners/sortProducts';
import { viewNextPage } from '../pages/catalog/listeners/viewNextPage';
import { viewPrevPage } from '../pages/catalog/listeners/viewPrevPage';
import { submitLogin } from '../pages/logReg/validation/authorizationFunctions/submitData/submitLogin';
import { submitReg } from '../pages/logReg/validation/authorizationFunctions/submitData/submitReg';

export function listenById(target: HTMLElement) {
    switch (target.id) {
        case 'login-submit':
            submitLogin(constants.authorization);
            break;
        case 'registr-submit':
            submitReg(constants.registration);
            break;
        case 'search-button':
            searchByButton();
            break;
        case 'cheap-view':
        case 'alpha-view':
            sortByValue(target);
            break;
        case 'filter-but':
            showFilter();
            break;
        case 'cart-cleaner':
            addClearModal();
            break;
        case 'yes-but':
            reallyClearTheCart();
            break;
        case 'no-but':
            doNotClearTheCart();
            break;
        case 'copyText-lap':
            copyPromoCode();
            break;
        case 'next-prod':
            viewNextPage(target);
            break;
        case 'prev-prod':
            viewPrevPage(target);
            break;
    }
}
