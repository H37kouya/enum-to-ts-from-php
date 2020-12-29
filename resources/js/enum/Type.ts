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
export const isType = (s: string): s is Type => Object.keys(Type).includes(s)

/**
 * ユーザー
 */
export const isUSER = (v: Type): v is 'USER' => v === Type.USER
/**
 * 組織
 */
export const isORGANIZATION = (v: Type): v is 'ORGANIZATION' => v === Type.ORGANIZATION
