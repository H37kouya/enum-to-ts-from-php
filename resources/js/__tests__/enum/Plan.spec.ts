import * as TestFunc from '@/enum/Plan'

describe('Enum Plan', () => {
    it('isPersonal', () => {
        expect(TestFunc.Plan.PERSONAL).toBe('PERSONAL')
        expect(TestFunc.isPlan('PERSONAL')).toBeTruthy()
        expect(TestFunc.isPersonal('PERSONAL')).toBeTruthy()
        expect(TestFunc.isPersonal('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isPro', () => {
        expect(TestFunc.Plan.PRO).toBe('PRO')
        expect(TestFunc.isPlan('PRO')).toBeTruthy()
        expect(TestFunc.isPro('PRO')).toBeTruthy()
        expect(TestFunc.isPro('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isEnterprise', () => {
        expect(TestFunc.Plan.ENTERPRISE).toBe('ENTERPRISE')
        expect(TestFunc.isPlan('ENTERPRISE')).toBeTruthy()
        expect(TestFunc.isEnterprise('ENTERPRISE')).toBeTruthy()
        expect(TestFunc.isEnterprise('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isStudent', () => {
        expect(TestFunc.Plan.STUDENT).toBe('STUDENT')
        expect(TestFunc.isPlan('STUDENT')).toBeTruthy()
        expect(TestFunc.isStudent('STUDENT')).toBeTruthy()
        expect(TestFunc.isStudent('aaaaabbbbcccc')).toBeFalsy()
    })
})
