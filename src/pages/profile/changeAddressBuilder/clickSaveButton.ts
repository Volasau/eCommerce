import { showToastError } from '../../logReg/utils/funcToastify.utils';
import { getISOCodeByCountryName } from '../../logReg/utils/getISOCode.utils';
import { logoutAction } from '../../logReg/utils/logOutFunc.utils';
import { ifFormHasErrors } from '../changePassword/ifFormHasErrors';
import { changeAddress } from '../interfaces/dataForUpdate';
import { IForm } from '../interfaces/iFormInterface';
import { customerAddressApi } from './customerAddressApi';
import { ifInputIsEmpty } from './ifInputIsEmpty';

export function clickSaveButton(
    but: HTMLButtonElement,
    form: IForm,
    chbxs: HTMLInputElement[],
    countryText: string,
    cityText: string,
    streetNameText: string,
    codePostText: string,
    id: string
): void {
    but.addEventListener('click', async () => {
        const countryValue = form.inners[0].inputHTML.value;
        const cityValue = form.inners[1].inputHTML.value;
        const streetValue = form.inners[2].inputHTML.value;
        const postCodeValue = form.inners[3].inputHTML.value;

        if (ifInputIsEmpty(form.inners)) {
            showToastError('Please fill in all fields and select at least one checkbox before submitting.');
            return;
        }

        if (ifFormHasErrors(form.form)) {
            showToastError('Please fix the errors before saving.');
            return;
        }

        changeAddress.id = id;
        changeAddress.country = form.inners[0].inputHTML.value;
        changeAddress.city = form.inners[1].inputHTML.value;
        changeAddress.street = form.inners[2].inputHTML.value;
        changeAddress.code = form.inners[3].inputHTML.value;
        changeAddress.billingDefault = chbxs[2].checked;
        changeAddress.shippingDefault = chbxs[3].checked;
        const country = await getISOCodeByCountryName(changeAddress.country);

        customerAddressApi(
            chbxs,
            country,
            countryText,
            cityText,
            streetNameText,
            codePostText,
            id,
            countryValue,
            cityValue,
            streetValue,
            postCodeValue
        );

        const btnEdit = document.querySelector(`.edit-${id}`) as HTMLButtonElement;
        if (btnEdit) {
            btnEdit.disabled = false;
        }
        await logoutAction();
        form.form.remove();
    });
}
