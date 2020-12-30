import * as TestFunc from '@/enum/Extend'

describe('Enum Extend', () => {
    it('isHELLO', () => {
        expect(TestFunc.Extend.HELLO).toBe('HELLO')
        expect(TestFunc.isExtend('HELLO')).toBeTruthy()
        expect(TestFunc.isHELLO('HELLO')).toBeTruthy()
        expect(TestFunc.isHELLO('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isBASE', () => {
        expect(TestFunc.Extend.BASE).toBe('BASE')
        expect(TestFunc.isExtend('BASE')).toBeTruthy()
        expect(TestFunc.isBASE('BASE')).toBeTruthy()
        expect(TestFunc.isBASE('aaaaabbbbcccc')).toBeFalsy()
    })

})
