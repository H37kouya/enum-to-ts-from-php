import * as TestFunc from '@/enum/Type'

describe('Enum Type', () => {
    it('isUser', () => {
        expect(TestFunc.Type.USER).toBe('USER')
        expect(TestFunc.isType('USER')).toBeTruthy()
        expect(TestFunc.isUser('USER')).toBeTruthy()
        expect(TestFunc.isUser('aaaaabbbbcccc')).toBeFalsy()
    })
    it('isOrganization', () => {
        expect(TestFunc.Type.ORGANIZATION).toBe('ORGANIZATION')
        expect(TestFunc.isType('ORGANIZATION')).toBeTruthy()
        expect(TestFunc.isOrganization('ORGANIZATION')).toBeTruthy()
        expect(TestFunc.isOrganization('aaaaabbbbcccc')).toBeFalsy()
    })

    describe('getAllType', () => {
        it('getAllType is Array', () => {
            expect(Array.isArray(TestFunc.getAllType())).toBeTruthy()
        })

        for (const key in TestFunc.Type) {
            it(`getAllType ${TestFunc.Type[key]}`, () => {
                expect(TestFunc.getAllType()).toContain(TestFunc.Type[key])
            })
        }
    })

    describe('getAllTypeKey', () => {
        it('getAllTypeKey is Array', () => {
            expect(Array.isArray(TestFunc.getAllTypeKey())).toBeTruthy()
        })

        for (const key in TestFunc.Type) {
            it(`getAllTypeKey ${key}`, () => {
                expect(TestFunc.getAllTypeKey()).toContain(key)
            })
        }
    })
})
