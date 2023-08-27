import { IImg } from './imgInterface';
import { IPrice } from './priceInterface';

interface IColor {
    key: string;
    label: string;
}

export interface IAttribute {
    name: string;
    color: IColor;
}

export interface IVariant {
    attributesRaw: IAttribute[];
    images: IImg[];
    prices: IPrice[];
}
