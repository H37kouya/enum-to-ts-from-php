import * as TestFunc from '@/enum/Type'

describe('Enum Type', () => {
    it('isUSER', () => {
        expect(TestFunc.Type.USER).toBe('USER')
        expect(TestFunc.isType('USER')).toBeTruthy()
        expect(TestFunc.isUser('USER')).toBeTruthy()
        expect(TestFunc.isUser('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isORGANIZATION', () => {
        expect(TestFunc.Type.ORGANIZATION).toBe('ORGANIZATION')
        expect(TestFunc.isType('ORGANIZATION')).toBeTruthy()
        expect(TestFunc.isOrganization('ORGANIZATION')).toBeTruthy()
        expect(TestFunc.isOrganization('aaaaabbbbcccc')).toBeFalsy()
    })
})
