import { shippingInner } from '../../../data/shippingInner';

export function addShipping() {
    const shippingBlock = document.createElement('div') as HTMLDivElement;
    shippingBlock.setAttribute('id', 'shipping');
    shippingBlock.innerHTML = shippingInner;
    return shippingBlock;
}
