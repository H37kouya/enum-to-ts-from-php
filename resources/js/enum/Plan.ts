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
export const isPERSONAL = (v: Plan): v is 'PERSONAL' => v === Plan.PERSONAL
export const isPRO = (v: Plan): v is 'PRO' => v === Plan.PRO
/**
 * 企業
 */
export const isENTERPRISE = (v: Plan): v is 'ENTERPRISE' => v === Plan.ENTERPRISE
/** 学生 */
export const isSTUDENT = (v: Plan): v is 'STUDENT' => v === Plan.STUDENT
