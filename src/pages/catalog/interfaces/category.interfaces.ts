import { IAttr } from './attr.interfaces';

export interface ICategory {
    catId: string;
    imageURL: string;
    catName: string;
    attributes: IAttr[];
}
