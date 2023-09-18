import { fireEvent } from '@testing-library/dom';
import { doNotClearTheCart } from '../../src/pages/basket/listeners/cartCleaner/doNotClearTheCart';

describe('doNotClearTheCart', () => {
    it('should remove the clear-dark element when no-but button is clicked', () => {
        const button = document.createElement('button');
        button.id = 'no-but';
        document.body.appendChild(button);

        const clearDark = document.createElement('div');
        clearDark.id = 'clear-dark';
        document.body.appendChild(clearDark);

        doNotClearTheCart();

        fireEvent.click(button);

        const removedClearDark = document.getElementById('clear-dark');
        expect(removedClearDark).toBeNull();

        document.body.removeChild(button);
    });

    it('should not remove the clear-dark element when a button with different id is clicked', () => {
        const button = document.createElement('button');
        button.id = 'some-other-id';
        document.body.appendChild(button);

        const clearDark = document.createElement('div');
        clearDark.id = 'clear-dark';
        document.body.appendChild(clearDark);

        doNotClearTheCart();

        fireEvent.click(button);

        const preservedClearDark = document.getElementById('clear-dark');
        expect(preservedClearDark).not.toBeNull();

        document.body.removeChild(button);
    });
});
