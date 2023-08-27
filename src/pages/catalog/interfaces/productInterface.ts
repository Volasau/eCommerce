import { IVariant } from './variantInterface';

export interface IProduct {
    allVariants: IVariant[];
    description: string;
    name: string;
}
