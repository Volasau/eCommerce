import { cartSVG } from '../../../../data/cartSVG';
import { createCart } from '../../../../server/cart/createCart';
import { removeItemFromCart } from '../../../../server/cart/removeLineItem';
import { addCartLogic } from '../../../../server/function/addCartLogic';
import { showToast } from '../../../logReg/utils/funcToastify.utils';

export async function changeCartButView(button: HTMLButtonElement, text: string): Promise<void> {
    let id = '';
    if (text === 'DELETE') id = button.id.replace('-cartBut', '');
    if (text === 'IN CART') id = button.id.replace('-cart', '');
    if (button.innerHTML.includes('BUY')) {
        button.style.backgroundColor = 'orange';
        if (text === 'IN CART') {
            button.style.color = 'grey';
            button.disabled = true;
        }
        button.innerHTML = `${cartSVG} ${text}`;
        button.style.fontSize = '10px';
        await addCartLogic(id);
    } else {
        button.style.backgroundColor = '';
        button.style.color = '';
        button.innerHTML = `${cartSVG} BUY`;
        button.style.fontSize = '';
        if (sessionStorage.getItem('newCartId') === null) {
            await createCart();
        }
        showToast('Product removed from basket');
        await removeItemFromCart(id);
    }
}
