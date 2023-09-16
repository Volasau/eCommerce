import { addItemToCart } from '../cart/addLineItem';
import { createCart } from '../cart/createCart';
import { createAnonymousToken } from '../token/accessTokenAS';

export async function addCartLogic(id: string) {
    if (localStorage.getItem('anonymousToken') === null) {
        await createAnonymousToken();
        console.log('1');
        await createCart();
        if (localStorage.getItem('newCartId') === null) {
            await createCart();
            console.log('2');
            await addItemToCart(id);
            console.log('3');
        } else {
            await addItemToCart(id);
            console.log('3');
        }
    } else if (localStorage.getItem('newCartId') === null) {
        await createCart();
        console.log('2');
        await addItemToCart(id);
        console.log('3');
    } else {
        await addItemToCart(id);
        console.log('3');
    }
}
