import { addItemToCart } from '../cart/addLineItem';
import { createCart } from '../cart/createCart';
import { createAnonymousToken } from '../token/accessTokenAS';

export async function addCartLogic(id: string) {
    if (localStorage.getItem('anonymousToken') === null) {
        await createAnonymousToken();
        await createCart();
        if (localStorage.getItem('newCartId') === null) {
            await createCart();
            await addItemToCart(id);
        } else {
            await addItemToCart(id);
        }
    } else if (localStorage.getItem('newCartId') === null) {
        await createCart();
        await addItemToCart(id);
    } else {
        await addItemToCart(id);
    }
}

export async function createCartLogic() {
    if (localStorage.getItem('anonymousToken') === null) {
        await createAnonymousToken();
        await createCart();
        if (localStorage.getItem('newCartId') === null) {
            await createCart();
        }
    }
}
