import Page from '../../core/template/page';
import { createLink } from '../logReg/utils/createLink.utils';

export const enum ErrorTypes {
    Error_404 = 404,
}

class ErrorPage extends Page {
    private errorType: ErrorTypes | string;

    textObject: string;

    constructor(id: string, errorType: ErrorTypes | string) {
        super(id);
        this.errorType = errorType;
        this.textObject = '404: Error! The page was not found.';
    }

    render() {
        const title = this.createHeaderTitle(this.textObject);
        const mainLink = createLink('#/main', 'To return to the home page click ', 'HOME', '');
        this._container.append(title, mainLink);
        return this._container;
    }
}

export default ErrorPage;
