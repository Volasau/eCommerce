import { cartSVG } from '../../../../data/cartSVG';
import { addItemToCart } from '../../../../server/cart/addLineItem';
import { createCart } from '../../../../server/cart/createCart';
import { removeItemFromCart } from '../../../../server/cart/removeLineItem';
import { createAnonymousToken } from '../../../../server/token/accessTokenAS';

export function changeCarButView(but: HTMLButtonElement, text: string): void {
    let id = '';
    if (text === 'DELETE') id = but.id.replace('-cartBut', '');
    if (text === 'IN CART') id = but.id.replace('-cart', '');
    if (but.innerHTML.includes('BUY')) {
        but.style.backgroundColor = 'orange';
        if (text === 'IN CART') but.style.color = 'grey';
        but.innerHTML = `${cartSVG} ${text}`;
        but.style.fontSize = '10px';
        if (text === 'IN CART') but.disabled = true;
        console.log(id);
        if (localStorage.getItem('anonymousToken') === null) {
            (async () => {
                await createAnonymousToken();
                console.log('1');
            })();
        }
        if (localStorage.getItem('newCartId') === null) {
            setTimeout(async () => {
                await createCart();
                console.log('2');
            }, 50);
        }
        (async () => {
            setTimeout(async () => {
                await addItemToCart(id);
                console.log('3');
            }, 100);
        })();
    } else {
        but.style.backgroundColor = '';
        but.style.color = '';
        but.innerHTML = `${cartSVG} BUY`;
        but.style.fontSize = '';
        console.log(id);
        if (localStorage.getItem('newCartId') === null) {
            setTimeout(async () => {
                await createCart();
                console.log('2');
            }, 50);
        }
        (async () => {
            removeItemFromCart(id);
        })();
    }
}
