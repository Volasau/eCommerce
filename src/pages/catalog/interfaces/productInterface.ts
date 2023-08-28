import { IVariant } from './variantInterface';

export interface IProduct {
    id: string;
    name: string;
    description: string;
    allVariants: IVariant[];
}
