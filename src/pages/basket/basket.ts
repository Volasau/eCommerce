import Page from '../../core/template/page';
import { getCartManager } from '../../server/cart/getCartById';
import { createLink } from '../logReg/utils/createLink.utils';
import { CartViewer } from './classes/cartViewer';
import { Cart } from './interfaces/cartInterface';
import { disableMinusButtons } from './functions/disableMinusButtons';
import { createCartLogic } from '../../server/function/addCartLogic';

class BasketPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'Basket';
    }

    async render() {
        const title = this.createHeaderTitle(this.text);
        const catalog = createLink('#/catalog', 'To go to the catalog click here ', 'Catalog📦', '');
        await createCartLogic();
        const cartId = sessionStorage.getItem('newCartId') as string;
        const cart = (await getCartManager.getCartById(cartId)) as Cart;
        const myCart = new CartViewer(cart);
        this._container.append(title, myCart.view(), catalog);
        disableMinusButtons();
        return this._container;
    }
}

export default BasketPage;
