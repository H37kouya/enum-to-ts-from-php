/**
 * [Enum] Plan
 */
export const Plan = {
    /**
     * 個人
     */
    PERSONAL: 'PERSONAL',

    PRO: 'PRO',

    /**
     * 企業
     */
    ENTERPRISE: 'ENTERPRISE',

    /** 学生 */
    STUDENT: 'STUDENT'
} as const

export type Plan = typeof Plan[keyof typeof Plan]

/**
 * [Enum] Plan
 */
export const isPlan = (s: string): s is Plan => Object.keys(Plan).includes(s)

/**
 * 個人
 */
export const isPERSONAL = (v: any): v is 'PERSONAL' => v === Plan.PERSONAL
export const isPRO = (v: any): v is 'PRO' => v === Plan.PRO
/**
 * 企業
 */
export const isENTERPRISE = (v: any): v is 'ENTERPRISE' => v === Plan.ENTERPRISE
/** 学生 */
export const isSTUDENT = (v: any): v is 'STUDENT' => v === Plan.STUDENT
