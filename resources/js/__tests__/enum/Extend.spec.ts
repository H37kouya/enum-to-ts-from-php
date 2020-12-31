import * as TestFunc from '@/enum/Extend'

describe('Enum Extend', () => {
    it('isHELLO', () => {
        expect(TestFunc.Extend.HELLO).toBe('HELLO')
        expect(TestFunc.isExtend('HELLO')).toBeTruthy()
        expect(TestFunc.isHello('HELLO')).toBeTruthy()
        expect(TestFunc.isHello('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isFOO_BAR', () => {
        expect(TestFunc.Extend.FOO_BAR).toBe('FOO_BAR')
        expect(TestFunc.isExtend('FOO_BAR')).toBeTruthy()
        expect(TestFunc.isFooBar('FOO_BAR')).toBeTruthy()
        expect(TestFunc.isFooBar('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isBASE', () => {
        expect(TestFunc.Extend.BASE).toBe('BASE')
        expect(TestFunc.isExtend('BASE')).toBeTruthy()
        expect(TestFunc.isBase('BASE')).toBeTruthy()
        expect(TestFunc.isBase('aaaaabbbbcccc')).toBeFalsy()
    })
})
