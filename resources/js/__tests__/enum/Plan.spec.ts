import * as TestFunc from '@/enum/Plan'

describe('Enum Plan', () => {
    it('isPERSONAL', () => {
        expect(TestFunc.Plan.PERSONAL).toBe('PERSONAL')
        expect(TestFunc.isPlan('PERSONAL')).toBeTruthy()
        expect(TestFunc.isPERSONAL('PERSONAL')).toBeTruthy()
        expect(TestFunc.isPERSONAL('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isPRO', () => {
        expect(TestFunc.Plan.PRO).toBe('PRO')
        expect(TestFunc.isPlan('PRO')).toBeTruthy()
        expect(TestFunc.isPRO('PRO')).toBeTruthy()
        expect(TestFunc.isPRO('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isENTERPRISE', () => {
        expect(TestFunc.Plan.ENTERPRISE).toBe('ENTERPRISE')
        expect(TestFunc.isPlan('ENTERPRISE')).toBeTruthy()
        expect(TestFunc.isENTERPRISE('ENTERPRISE')).toBeTruthy()
        expect(TestFunc.isENTERPRISE('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isSTUDENT', () => {
        expect(TestFunc.Plan.STUDENT).toBe('STUDENT')
        expect(TestFunc.isPlan('STUDENT')).toBeTruthy()
        expect(TestFunc.isSTUDENT('STUDENT')).toBeTruthy()
        expect(TestFunc.isSTUDENT('aaaaabbbbcccc')).toBeFalsy()
    })

})
