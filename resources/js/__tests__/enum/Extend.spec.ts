import * as TestFunc from '@/enum/Extend'

describe('Enum Extend', () => {
    it('isHello', () => {
        expect(TestFunc.Extend.HELLO).toBe('HELLO')
        expect(TestFunc.isExtend('HELLO')).toBeTruthy()
        expect(TestFunc.isHello('HELLO')).toBeTruthy()
        expect(TestFunc.isHello('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isFooBar', () => {
        expect(TestFunc.Extend.FOO_BAR).toBe('FOO_BAR')
        expect(TestFunc.isExtend('FOO_BAR')).toBeTruthy()
        expect(TestFunc.isFooBar('FOO_BAR')).toBeTruthy()
        expect(TestFunc.isFooBar('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isBase', () => {
        expect(TestFunc.Extend.BASE).toBe('BASE')
        expect(TestFunc.isExtend('BASE')).toBeTruthy()
        expect(TestFunc.isBase('BASE')).toBeTruthy()
        expect(TestFunc.isBase('aaaaabbbbcccc')).toBeFalsy()
    })

    describe('getAllExtend', () => {
        it('getAllExtend is Array', () => {
            expect(Array.isArray(TestFunc.getAllExtend())).toBeTruthy()
        })

        for (const key in TestFunc.Extend) {
            it(`getAllExtend ${TestFunc.Extend[key]}`, () => {
                expect(TestFunc.getAllExtend()).toContain(TestFunc.Extend[key])
            })
        }
    })

    describe('getAllExtendKey', () => {
        it('getAllExtendKey is Array', () => {
            expect(Array.isArray(TestFunc.getAllExtendKey())).toBeTruthy()
        })

        for (const key in TestFunc.Extend) {
            it(`getAllExtendKey ${key}`, () => {
                expect(TestFunc.getAllExtendKey()).toContain(key)
            })
        }
    })
})
