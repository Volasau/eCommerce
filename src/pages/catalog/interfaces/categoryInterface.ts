import { IAttr } from './attrInterface';

export interface ICategory {
    catId: string;
    imageURL: string;
    catName: string;
    attributes: IAttr[];
}
