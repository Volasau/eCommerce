import { IVariant } from './variant.interfaces';

export interface IProduct {
    id: string;
    name: string;
    description: string;
    allVariants: IVariant[];
}
