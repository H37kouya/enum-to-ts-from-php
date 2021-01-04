/**
 * [Enum] Type
 */
export const Type = {
    /**
     * ユーザー
     */
    USER: 'USER',

    /**
     * 組織
     */
    ORGANIZATION: 'ORGANIZATION'
} as const

export type TypeKey = keyof typeof Type
export type Type = typeof Type[keyof typeof Type]

/**
 * [Enum] Type
 */
export const getAllType = (): Type[] => Object.values(Type)
/**
 * [Enum] Type
 */
export const getAllTypeKey = (): TypeKey[] => Object.keys(Type) as TypeKey[]
/**
 * [Enum] Type
 */
export const isType = (s: any): s is Type => Object.values(Type).includes(s)

/**
 * ユーザー
 */
export const isUser = (v: any): v is 'USER' => v === Type.USER
/**
 * 組織
 */
export const isOrganization = (v: any): v is 'ORGANIZATION' => v === Type.ORGANIZATION
