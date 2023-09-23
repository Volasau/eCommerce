import { addItemToCart } from '../cart/addLineItem';
import { createCart } from '../cart/createCart';
import { createAnonymousToken } from '../token/anonymousTokenManager';

export async function addCartLogic(id: string): Promise<void> {
    if (sessionStorage.getItem('anonymousToken') === null) {
        await createAnonymousToken();
        await createCart();
        if (sessionStorage.getItem('newCartId') === null) {
            await createCart();
            await addItemToCart(id);
        } else {
            await addItemToCart(id);
        }
    } else if (sessionStorage.getItem('newCartId') === null) {
        await createCart();
        await addItemToCart(id);
    } else {
        await addItemToCart(id);
    }
}

export async function createCartLogic(): Promise<void> {
    if (sessionStorage.getItem('anonymousToken') === null) {
        await createAnonymousToken();
        await createCart();
        if (sessionStorage.getItem('newCartId') === null) {
            await createCart();
        }
    }
}
