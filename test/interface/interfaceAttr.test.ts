import { IAttr } from '../../src/pages/catalog/interfaces/attrInterface';

describe('IAttr interface', () => {
    it('should have the correct structure', () => {
        const attr: IAttr = {
            attribute: 'Color',
            values: ['Red', 'Blue', 'Green'],
        };

        expect(attr).toHaveProperty('attribute');
        expect(attr).toHaveProperty('values');
        expect(typeof attr.attribute).toBe('string');
        expect(Array.isArray(attr.values)).toBe(true);
    });
});
