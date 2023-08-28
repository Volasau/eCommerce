interface IAttr {
    attribute: string;
    values: string[];
}

export interface ISubCategory {
    subId: string;
    imageURL: string;
    subName: string;
    attributes: IAttr[];
}
