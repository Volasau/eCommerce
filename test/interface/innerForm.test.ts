import { IInnerForm } from '../../src/core/interfaces/innerFormInterface';

describe('IInnerForm interface', () => {
    it('should have the required properties', () => {
        const innerForm: IInnerForm = {
            labelText: 'Label Text',
            inputType: 'text',
            inputId: 'inputId',
            inputName: 'inputName',
            formGroup: document.createElement('div'),
            label: document.createElement('label'),
            inputHTML: document.createElement('input'),
            error: document.createElement('div'),
            create: () => document.createElement('div'),
        };

        expect(innerForm).toBeDefined();
        expect(typeof innerForm.labelText).toBe('string');
        expect(typeof innerForm.inputType).toBe('string');
        expect(typeof innerForm.inputId).toBe('string');
        expect(typeof innerForm.inputName).toBe('string');
        expect(innerForm.formGroup).toBeInstanceOf(HTMLElement);
        expect(innerForm.label).toBeInstanceOf(HTMLElement);
        expect(innerForm.inputHTML).toBeInstanceOf(HTMLInputElement);
        expect(innerForm.error).toBeInstanceOf(HTMLElement);
        expect(typeof innerForm.create).toBe('function');
    });

    it('should return an HTMLElement from the create() method', () => {
        const innerForm: IInnerForm = {
            labelText: 'Label Text',
            inputType: 'text',
            inputId: 'inputId',
            inputName: 'inputName',
            formGroup: document.createElement('div'),
            label: document.createElement('label'),
            inputHTML: document.createElement('input'),
            error: document.createElement('div'),
            create: () => document.createElement('div'),
        };

        const formElement = innerForm.create();
        expect(formElement).toBeInstanceOf(HTMLElement);
    });
});
