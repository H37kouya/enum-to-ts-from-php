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

export type PlanKey = keyof typeof Plan
export type Plan = typeof Plan[keyof typeof Plan]

/**
 * [Enum] Plan
 */
export const getAllPlan = (): Plan[] => Object.values(Plan)
/**
 * [Enum] Plan
 */
export const getAllPlanKey = (): PlanKey[] => Object.keys(Plan) as PlanKey[]
/**
 * [Enum] Plan
 */
export const isPlan = (s: any): s is Plan => Object.values(Plan).includes(s)

/**
 * 個人
 */
export const isPersonal = (v: any): v is 'PERSONAL' => v === Plan.PERSONAL
export const isPro = (v: any): v is 'PRO' => v === Plan.PRO
/**
 * 企業
 */
export const isEnterprise = (v: any): v is 'ENTERPRISE' => v === Plan.ENTERPRISE
/** 学生 */
export const isStudent = (v: any): v is 'STUDENT' => v === Plan.STUDENT
