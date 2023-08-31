import { buttonHTML, divHTML, imgHTML } from '../../classes/elementBuilder';

export function buildModal(imgId: string, imgURL: string, productName: string) {
    const back = divHTML.getElement('', 'back', 'back') as HTMLDivElement;
    const modalWrap = divHTML.getElement('', `${imgId}-wrap`, 'modal-wrap') as HTMLDivElement;
    const prevButton = buttonHTML.getElement('<<<', `${imgId}-prev`, 'prev') as HTMLButtonElement;
    const nextButton = buttonHTML.getElement('>>>', `${imgId}-next`, 'next') as HTMLButtonElement;
    const imgDiv = divHTML.getElement('', `${imgId}-next`, 'img-div') as HTMLDivElement;
    const img = imgHTML.getElement('', `${imgId}-img`, 'img', imgURL, `${productName} image`);
    prevButton.disabled = true;
    imgDiv.append(img);
    modalWrap.append(prevButton, imgDiv, nextButton);
    back.append(modalWrap);

    return back;
}
