import * as TestFunc from '@/enum/PrefCode'

describe('Enum PrefCode', () => {
    it('isHokkaidou', () => {
        expect(TestFunc.PrefCode.HOKKAIDOU).toBe('1')
        expect(TestFunc.isPrefCode('1')).toBeTruthy()
        expect(TestFunc.isHokkaidou('1')).toBeTruthy()
        expect(TestFunc.isHokkaidou('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isAomori', () => {
        expect(TestFunc.PrefCode.AOMORI).toBe('2')
        expect(TestFunc.isPrefCode('2')).toBeTruthy()
        expect(TestFunc.isAomori('2')).toBeTruthy()
        expect(TestFunc.isAomori('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isIwate', () => {
        expect(TestFunc.PrefCode.IWATE).toBe('3')
        expect(TestFunc.isPrefCode('3')).toBeTruthy()
        expect(TestFunc.isIwate('3')).toBeTruthy()
        expect(TestFunc.isIwate('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isMiyagi', () => {
        expect(TestFunc.PrefCode.MIYAGI).toBe('4')
        expect(TestFunc.isPrefCode('4')).toBeTruthy()
        expect(TestFunc.isMiyagi('4')).toBeTruthy()
        expect(TestFunc.isMiyagi('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isAkita', () => {
        expect(TestFunc.PrefCode.AKITA).toBe('5')
        expect(TestFunc.isPrefCode('5')).toBeTruthy()
        expect(TestFunc.isAkita('5')).toBeTruthy()
        expect(TestFunc.isAkita('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isYamagata', () => {
        expect(TestFunc.PrefCode.YAMAGATA).toBe('6')
        expect(TestFunc.isPrefCode('6')).toBeTruthy()
        expect(TestFunc.isYamagata('6')).toBeTruthy()
        expect(TestFunc.isYamagata('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isFukusima', () => {
        expect(TestFunc.PrefCode.FUKUSIMA).toBe('7')
        expect(TestFunc.isPrefCode('7')).toBeTruthy()
        expect(TestFunc.isFukusima('7')).toBeTruthy()
        expect(TestFunc.isFukusima('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isIbaraki', () => {
        expect(TestFunc.PrefCode.IBARAKI).toBe('8')
        expect(TestFunc.isPrefCode('8')).toBeTruthy()
        expect(TestFunc.isIbaraki('8')).toBeTruthy()
        expect(TestFunc.isIbaraki('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isTochigi', () => {
        expect(TestFunc.PrefCode.TOCHIGI).toBe('9')
        expect(TestFunc.isPrefCode('9')).toBeTruthy()
        expect(TestFunc.isTochigi('9')).toBeTruthy()
        expect(TestFunc.isTochigi('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isGunma', () => {
        expect(TestFunc.PrefCode.GUNMA).toBe('10')
        expect(TestFunc.isPrefCode('10')).toBeTruthy()
        expect(TestFunc.isGunma('10')).toBeTruthy()
        expect(TestFunc.isGunma('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isSaitama', () => {
        expect(TestFunc.PrefCode.SAITAMA).toBe('11')
        expect(TestFunc.isPrefCode('11')).toBeTruthy()
        expect(TestFunc.isSaitama('11')).toBeTruthy()
        expect(TestFunc.isSaitama('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isChiba', () => {
        expect(TestFunc.PrefCode.CHIBA).toBe('12')
        expect(TestFunc.isPrefCode('12')).toBeTruthy()
        expect(TestFunc.isChiba('12')).toBeTruthy()
        expect(TestFunc.isChiba('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isTokyo', () => {
        expect(TestFunc.PrefCode.TOKYO).toBe('13')
        expect(TestFunc.isPrefCode('13')).toBeTruthy()
        expect(TestFunc.isTokyo('13')).toBeTruthy()
        expect(TestFunc.isTokyo('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isKanagawa', () => {
        expect(TestFunc.PrefCode.KANAGAWA).toBe('14')
        expect(TestFunc.isPrefCode('14')).toBeTruthy()
        expect(TestFunc.isKanagawa('14')).toBeTruthy()
        expect(TestFunc.isKanagawa('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isNigata', () => {
        expect(TestFunc.PrefCode.NIGATA).toBe('15')
        expect(TestFunc.isPrefCode('15')).toBeTruthy()
        expect(TestFunc.isNigata('15')).toBeTruthy()
        expect(TestFunc.isNigata('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isToyama', () => {
        expect(TestFunc.PrefCode.TOYAMA).toBe('16')
        expect(TestFunc.isPrefCode('16')).toBeTruthy()
        expect(TestFunc.isToyama('16')).toBeTruthy()
        expect(TestFunc.isToyama('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isIsikawa', () => {
        expect(TestFunc.PrefCode.ISIKAWA).toBe('17')
        expect(TestFunc.isPrefCode('17')).toBeTruthy()
        expect(TestFunc.isIsikawa('17')).toBeTruthy()
        expect(TestFunc.isIsikawa('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isFukui', () => {
        expect(TestFunc.PrefCode.FUKUI).toBe('18')
        expect(TestFunc.isPrefCode('18')).toBeTruthy()
        expect(TestFunc.isFukui('18')).toBeTruthy()
        expect(TestFunc.isFukui('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isYamanashi', () => {
        expect(TestFunc.PrefCode.YAMANASHI).toBe('19')
        expect(TestFunc.isPrefCode('19')).toBeTruthy()
        expect(TestFunc.isYamanashi('19')).toBeTruthy()
        expect(TestFunc.isYamanashi('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isNagano', () => {
        expect(TestFunc.PrefCode.NAGANO).toBe('20')
        expect(TestFunc.isPrefCode('20')).toBeTruthy()
        expect(TestFunc.isNagano('20')).toBeTruthy()
        expect(TestFunc.isNagano('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isGifu', () => {
        expect(TestFunc.PrefCode.GIFU).toBe('21')
        expect(TestFunc.isPrefCode('21')).toBeTruthy()
        expect(TestFunc.isGifu('21')).toBeTruthy()
        expect(TestFunc.isGifu('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isShizuoka', () => {
        expect(TestFunc.PrefCode.SHIZUOKA).toBe('22')
        expect(TestFunc.isPrefCode('22')).toBeTruthy()
        expect(TestFunc.isShizuoka('22')).toBeTruthy()
        expect(TestFunc.isShizuoka('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isAichi', () => {
        expect(TestFunc.PrefCode.AICHI).toBe('23')
        expect(TestFunc.isPrefCode('23')).toBeTruthy()
        expect(TestFunc.isAichi('23')).toBeTruthy()
        expect(TestFunc.isAichi('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isMie', () => {
        expect(TestFunc.PrefCode.MIE).toBe('24')
        expect(TestFunc.isPrefCode('24')).toBeTruthy()
        expect(TestFunc.isMie('24')).toBeTruthy()
        expect(TestFunc.isMie('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isSiga', () => {
        expect(TestFunc.PrefCode.SIGA).toBe('25')
        expect(TestFunc.isPrefCode('25')).toBeTruthy()
        expect(TestFunc.isSiga('25')).toBeTruthy()
        expect(TestFunc.isSiga('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isKyoto', () => {
        expect(TestFunc.PrefCode.KYOTO).toBe('26')
        expect(TestFunc.isPrefCode('26')).toBeTruthy()
        expect(TestFunc.isKyoto('26')).toBeTruthy()
        expect(TestFunc.isKyoto('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isOsaka', () => {
        expect(TestFunc.PrefCode.OSAKA).toBe('27')
        expect(TestFunc.isPrefCode('27')).toBeTruthy()
        expect(TestFunc.isOsaka('27')).toBeTruthy()
        expect(TestFunc.isOsaka('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isHyogo', () => {
        expect(TestFunc.PrefCode.HYOGO).toBe('28')
        expect(TestFunc.isPrefCode('28')).toBeTruthy()
        expect(TestFunc.isHyogo('28')).toBeTruthy()
        expect(TestFunc.isHyogo('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isNara', () => {
        expect(TestFunc.PrefCode.NARA).toBe('29')
        expect(TestFunc.isPrefCode('29')).toBeTruthy()
        expect(TestFunc.isNara('29')).toBeTruthy()
        expect(TestFunc.isNara('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isWakayama', () => {
        expect(TestFunc.PrefCode.WAKAYAMA).toBe('30')
        expect(TestFunc.isPrefCode('30')).toBeTruthy()
        expect(TestFunc.isWakayama('30')).toBeTruthy()
        expect(TestFunc.isWakayama('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isTottori', () => {
        expect(TestFunc.PrefCode.TOTTORI).toBe('31')
        expect(TestFunc.isPrefCode('31')).toBeTruthy()
        expect(TestFunc.isTottori('31')).toBeTruthy()
        expect(TestFunc.isTottori('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isSimane', () => {
        expect(TestFunc.PrefCode.SIMANE).toBe('32')
        expect(TestFunc.isPrefCode('32')).toBeTruthy()
        expect(TestFunc.isSimane('32')).toBeTruthy()
        expect(TestFunc.isSimane('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isOkayama', () => {
        expect(TestFunc.PrefCode.OKAYAMA).toBe('33')
        expect(TestFunc.isPrefCode('33')).toBeTruthy()
        expect(TestFunc.isOkayama('33')).toBeTruthy()
        expect(TestFunc.isOkayama('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isHirosima', () => {
        expect(TestFunc.PrefCode.HIROSIMA).toBe('34')
        expect(TestFunc.isPrefCode('34')).toBeTruthy()
        expect(TestFunc.isHirosima('34')).toBeTruthy()
        expect(TestFunc.isHirosima('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isYamaguchi', () => {
        expect(TestFunc.PrefCode.YAMAGUCHI).toBe('35')
        expect(TestFunc.isPrefCode('35')).toBeTruthy()
        expect(TestFunc.isYamaguchi('35')).toBeTruthy()
        expect(TestFunc.isYamaguchi('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isTokushima', () => {
        expect(TestFunc.PrefCode.TOKUSHIMA).toBe('36')
        expect(TestFunc.isPrefCode('36')).toBeTruthy()
        expect(TestFunc.isTokushima('36')).toBeTruthy()
        expect(TestFunc.isTokushima('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isKagawa', () => {
        expect(TestFunc.PrefCode.KAGAWA).toBe('37')
        expect(TestFunc.isPrefCode('37')).toBeTruthy()
        expect(TestFunc.isKagawa('37')).toBeTruthy()
        expect(TestFunc.isKagawa('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isEhime', () => {
        expect(TestFunc.PrefCode.EHIME).toBe('38')
        expect(TestFunc.isPrefCode('38')).toBeTruthy()
        expect(TestFunc.isEhime('38')).toBeTruthy()
        expect(TestFunc.isEhime('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isKouchi', () => {
        expect(TestFunc.PrefCode.KOUCHI).toBe('39')
        expect(TestFunc.isPrefCode('39')).toBeTruthy()
        expect(TestFunc.isKouchi('39')).toBeTruthy()
        expect(TestFunc.isKouchi('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isFukushima', () => {
        expect(TestFunc.PrefCode.FUKUSHIMA).toBe('40')
        expect(TestFunc.isPrefCode('40')).toBeTruthy()
        expect(TestFunc.isFukushima('40')).toBeTruthy()
        expect(TestFunc.isFukushima('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isSaga', () => {
        expect(TestFunc.PrefCode.SAGA).toBe('41')
        expect(TestFunc.isPrefCode('41')).toBeTruthy()
        expect(TestFunc.isSaga('41')).toBeTruthy()
        expect(TestFunc.isSaga('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isNagasaki', () => {
        expect(TestFunc.PrefCode.NAGASAKI).toBe('42')
        expect(TestFunc.isPrefCode('42')).toBeTruthy()
        expect(TestFunc.isNagasaki('42')).toBeTruthy()
        expect(TestFunc.isNagasaki('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isKumamoto', () => {
        expect(TestFunc.PrefCode.KUMAMOTO).toBe('43')
        expect(TestFunc.isPrefCode('43')).toBeTruthy()
        expect(TestFunc.isKumamoto('43')).toBeTruthy()
        expect(TestFunc.isKumamoto('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isOita', () => {
        expect(TestFunc.PrefCode.OITA).toBe('44')
        expect(TestFunc.isPrefCode('44')).toBeTruthy()
        expect(TestFunc.isOita('44')).toBeTruthy()
        expect(TestFunc.isOita('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isMiyazaki', () => {
        expect(TestFunc.PrefCode.MIYAZAKI).toBe('45')
        expect(TestFunc.isPrefCode('45')).toBeTruthy()
        expect(TestFunc.isMiyazaki('45')).toBeTruthy()
        expect(TestFunc.isMiyazaki('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isKagoshima', () => {
        expect(TestFunc.PrefCode.KAGOSHIMA).toBe('46')
        expect(TestFunc.isPrefCode('46')).toBeTruthy()
        expect(TestFunc.isKagoshima('46')).toBeTruthy()
        expect(TestFunc.isKagoshima('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isOkinawa', () => {
        expect(TestFunc.PrefCode.OKINAWA).toBe('47')
        expect(TestFunc.isPrefCode('47')).toBeTruthy()
        expect(TestFunc.isOkinawa('47')).toBeTruthy()
        expect(TestFunc.isOkinawa('aaaaabbbbcccc')).toBeFalsy()
    })

    describe('getAllPrefCode', () => {
        it('getAllPrefCode is Array', () => {
            expect(Array.isArray(TestFunc.getAllPrefCode())).toBeTruthy()
        })

        for (const key in TestFunc.PrefCode) {
            it(`getAllPrefCode ${TestFunc.PrefCode[key]}`, () => {
                expect(TestFunc.getAllPrefCode()).toContain(TestFunc.PrefCode[key])
            })
        }
    })

    describe('getAllPrefCodeKey', () => {
        it('getAllPrefCodeKey is Array', () => {
            expect(Array.isArray(TestFunc.getAllPrefCodeKey())).toBeTruthy()
        })

        for (const key in TestFunc.PrefCode) {
            it(`getAllPrefCodeKey ${key}`, () => {
                expect(TestFunc.getAllPrefCodeKey()).toContain(key)
            })
        }
    })
})
