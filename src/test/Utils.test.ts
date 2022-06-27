import { Utils } from "../app/Utils";

describe('Utils', () => {

    beforeEach(() => {
        console.log('each');
    });

    beforeAll(() => {
        console.log('all');
        
    });

    test('should uppercase test', () => {
        const uppercaseString = Utils.toUpperCase('abc');
        expect(uppercaseString).toBe('ABC');
    });
    test('should parse url', () => {
        const parseUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parseUrl.href).toBe('http://localhost:8080/login');
        expect(parseUrl.port).toBe('8080');
        expect(parseUrl.protocol).toBe('http:');
        expect(parseUrl.query).toEqual({});
    });
    test('should url with query params', () => {
        const parseUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        };
        expect(parseUrl.query).toEqual(expectedQuery);
    });

    test.todo('should be invalid url')
});