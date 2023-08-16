import { IAuthorisObj } from '../../../../core/interfaces/aythorisObjInterface';
import { IRegObj } from '../../../../core/interfaces/regObjInterface';

export function registerOnTheServer(obj: IAuthorisObj | IRegObj) {
    console.log(obj);
}
