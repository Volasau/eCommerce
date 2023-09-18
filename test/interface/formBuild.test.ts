import { IFormBuilder } from '../../src/core/interfaces/formBuilderInterface';

describe('IFormBuilder interface', () => {
    it('should have the required properties', () => {
        const builder: IFormBuilder = {
            formHTML: document.createElement('form'),
            formId: 'exampleForm',
            innerFormList: [],
            build: () => document.createElement('form'),
        };

        expect(builder).toBeDefined();
        expect(builder.formHTML).toBeInstanceOf(HTMLFormElement);
        expect(typeof builder.formId).toBe('string');
        expect(Array.isArray(builder.innerFormList)).toBe(true);
        expect(typeof builder.build).toBe('function');
    });

    it('should return an HTMLFormElement from the build() method', () => {
        const builder: IFormBuilder = {
            formHTML: document.createElement('form'),
            formId: 'exampleForm',
            innerFormList: [],
            build: () => document.createElement('form'),
        };

        const form = builder.build();
        expect(form).toBeInstanceOf(HTMLFormElement);
    });
});
