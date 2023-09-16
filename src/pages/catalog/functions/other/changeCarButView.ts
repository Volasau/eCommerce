import { cartSVG } from '../../../../data/cartSVG';
import { createCart } from '../../../../server/cart/createCart';
import { removeItemFromCart } from '../../../../server/cart/removeLineItem';
import { addCartLogic } from '../../../../server/function/addCartLogic';

export async function changeCarButView(but: HTMLButtonElement, text: string): Promise<void> {
    let id = '';
    if (text === 'DELETE') id = but.id.replace('-cartBut', '');
    if (text === 'IN CART') id = but.id.replace('-cart', '');
    if (but.innerHTML.includes('BUY')) {
        but.style.backgroundColor = 'orange';
        if (text === 'IN CART') but.style.color = 'grey';
        but.innerHTML = `${cartSVG} ${text}`;
        but.style.fontSize = '10px';
        if (text === 'IN CART') but.disabled = true;
        await addCartLogic(id);
    } else {
        but.style.backgroundColor = '';
        but.style.color = '';
        but.innerHTML = `${cartSVG} BUY`;
        but.style.fontSize = '';
        if (localStorage.getItem('newCartId') === null) {
            await createCart();
        }
        await removeItemFromCart(id);
    }
}
