import Page from '../../core/template/page';
import { createLink } from '../logReg/functions/createLink';

export const enum ErrorTypes {
    Error_404 = 404,
}

class ErrorPage extends Page {
    private errorType: ErrorTypes | string;

    static TextObject: { [prop: string]: string } = {
        '404': 'Error! The page was not found.',
    };

    constructor(id: string, errorType: ErrorTypes | string) {
        super(id);
        this.errorType = errorType;
    }

    render() {
        const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
        const mainLink = createLink('#/main', 'To return to the home page click ', 'HOME', '');
        this.container.append(title, mainLink);
        return this.container;
    }
}

export default ErrorPage;
