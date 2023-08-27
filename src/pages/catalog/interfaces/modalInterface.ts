import { IImg } from './imgInterface';
import { IPrice } from './priceInterface';
import { IAttribute } from './variantInterface';

export interface IModal {
    modalHTML: HTMLDivElement;
    images: IImg[];
    attributes: IAttribute[];
    prices: IPrice[];
    startModal(): void;
}
