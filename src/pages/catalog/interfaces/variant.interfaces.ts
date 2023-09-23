import { IPrice } from './price.interfaces';

interface IImages {
    label: string | null;
    url: string;
}

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
    images: IImages[];
    prices: IPrice[];
}
