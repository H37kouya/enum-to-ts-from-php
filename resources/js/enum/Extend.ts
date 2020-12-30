
export const Extend = {
    HELLO: 'HELLO',

    BASE: 'BASE'
} as const

export type Extend = typeof Extend[keyof typeof Extend]


export const isExtend = (s: any): s is Extend => Object.values(Extend).includes(s)

export const isHELLO = (v: any): v is 'HELLO' => v === Extend.HELLO
export const isBASE = (v: any): v is 'BASE' => v === Extend.BASE
