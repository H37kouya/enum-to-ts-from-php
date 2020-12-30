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

export type Type = typeof Type[keyof typeof Type]

/**
 * [Enum] Type
 */
export const isType = (s: any): s is Type => Object.values(Type).includes(s)

/**
 * ユーザー
 */
export const isUSER = (v: any): v is 'USER' => v === Type.USER
/**
 * 組織
 */
export const isORGANIZATION = (v: any): v is 'ORGANIZATION' => v === Type.ORGANIZATION
