export function changeQuantity(): void {
    const quantity = document.querySelector('.quantity') as HTMLSpanElement;
    const productList = document.getElementById('product-view') as HTMLDivElement;
    const products = productList.childNodes as NodeList;
    quantity.textContent = `${products.length}`;
}
