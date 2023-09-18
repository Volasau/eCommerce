export function changeQuantity(): void {
    const quantity = document.querySelector('.quantity') as HTMLSpanElement;
    const productList = document.getElementById('product-view') as HTMLDivElement;
    console.log(productList);
    const products = productList.childNodes as NodeList;
    quantity.textContent = `${products.length}`;
}
