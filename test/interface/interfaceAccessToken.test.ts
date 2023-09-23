import { IAccessTokenResponse } from '../../src/core/interfaces/accessTokenResponse.interfaces';

const testAccessTokenResponse: IAccessTokenResponse = {
    access_token: 'string',
    expires_in: 1234,
    token_type: 'string',
    scope: 'string',
    refresh_token: 'string',
};

describe('IAccessTokenResponse Interface', () => {
    it('should have a access_token property of type string', () => {
        expect(typeof testAccessTokenResponse.access_token).toBe('string');
    });

    it('should have a expires_in property of type string', () => {
        expect(typeof testAccessTokenResponse.expires_in).toBe('number');
    });

    it('should have a token_type property of type string', () => {
        expect(typeof testAccessTokenResponse.token_type).toBe('string');
    });

    it('should have a scope property of type string', () => {
        expect(typeof testAccessTokenResponse.scope).toBe('string');
    });

    it('should have a refresh_token property of type string', () => {
        expect(typeof testAccessTokenResponse.refresh_token).toBe('string');
    });
    it('should not allow access_token to be a number', () => {
        expect(typeof testAccessTokenResponse.access_token).not.toBe('number');
    });
    it('should not allow expires_in to be a number', () => {
        expect(typeof testAccessTokenResponse.expires_in).not.toBe('string');
    });
});
