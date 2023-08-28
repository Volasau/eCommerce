import { IPrice } from './priceInterface';

interface IValue {
    key: string;
    label: string;
}

export interface IAttribute {
    name: string;
    value: IValue[];
}

export interface IVariant {
    attributesRaw: IAttribute[];
    images: string[];
    prices: IPrice[];
}
