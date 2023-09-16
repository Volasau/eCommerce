import { addItemToCart } from '../cart/addLineItem';
import { createCart } from '../cart/createCart';
import { createAnonymousToken } from '../token/accessTokenAS';

export function addCartLogic(id: string) {
    if (localStorage.getItem('anonymousToken') === null) {
        (async () => {
            await createAnonymousToken();
            console.log('1');
            (async () => {
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
            })();
        })();
    } else if (localStorage.getItem('newCartId') === null) {
        (async () => {
            await createCart();
            console.log('2');
            await addItemToCart(id);
            console.log('3');
        })();
    } else {
        (async () => {
            await addItemToCart(id);
            console.log('3');
        })();
    }
}
