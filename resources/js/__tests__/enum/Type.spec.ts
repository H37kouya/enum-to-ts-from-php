import * as TestFunc from '@/enum/Type'

describe('Enum Type', () => {
    it('isUSER', () => {
        expect(TestFunc.Type.USER).toBe('USER')
        expect(TestFunc.isType('USER')).toBeTruthy()
        expect(TestFunc.isUSER('USER')).toBeTruthy()
        expect(TestFunc.isUSER('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isORGANIZATION', () => {
        expect(TestFunc.Type.ORGANIZATION).toBe('ORGANIZATION')
        expect(TestFunc.isType('ORGANIZATION')).toBeTruthy()
        expect(TestFunc.isORGANIZATION('ORGANIZATION')).toBeTruthy()
        expect(TestFunc.isORGANIZATION('aaaaabbbbcccc')).toBeFalsy()
    })

})
