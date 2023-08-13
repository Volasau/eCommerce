import { IAuthorisObj } from '../../../../core/interface/aythorisObjInterface';
import { IRegObj } from '../../../../core/interface/regObjInterface';

export function authServer(obj: IAuthorisObj | IRegObj) {
    console.log(obj);
}
