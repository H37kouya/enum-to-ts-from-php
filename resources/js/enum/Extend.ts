
export const Extend = {
    HELLO: 'HELLO',

    FOO_BAR: 'FOO_BAR',

    BASE: 'BASE'
} as const

export type Extend = typeof Extend[keyof typeof Extend]


export const isExtend = (s: any): s is Extend => Object.values(Extend).includes(s)

export const isHello = (v: any): v is 'HELLO' => v === Extend.HELLO
export const isFooBar = (v: any): v is 'FOO_BAR' => v === Extend.FOO_BAR
export const isBase = (v: any): v is 'BASE' => v === Extend.BASE
