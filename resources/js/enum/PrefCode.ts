
export const PrefCode = {
    HOKKAIDOU: '1',

    AOMORI: '2',

    IWATE: '3',

    MIYAGI: '4',

    AKITA: '5',

    YAMAGATA: '6',

    FUKUSIMA: '7',

    IBARAKI: '8',

    TOCHIGI: '9',

    GUNMA: '10',

    SAITAMA: '11',

    CHIBA: '12',

    TOKYO: '13',

    KANAGAWA: '14',

    NIGATA: '15',

    TOYAMA: '16',

    ISIKAWA: '17',

    FUKUI: '18',

    YAMANASHI: '19',

    NAGANO: '20',

    GIFU: '21',

    SHIZUOKA: '22',

    AICHI: '23',

    MIE: '24',

    SIGA: '25',

    KYOTO: '26',

    OSAKA: '27',

    HYOGO: '28',

    NARA: '29',

    WAKAYAMA: '30',

    TOTTORI: '31',

    SIMANE: '32',

    OKAYAMA: '33',

    HIROSIMA: '34',

    YAMAGUCHI: '35',

    TOKUSHIMA: '36',

    KAGAWA: '37',

    EHIME: '38',

    KOUCHI: '39',

    FUKUSHIMA: '40',

    SAGA: '41',

    NAGASAKI: '42',

    KUMAMOTO: '43',

    OITA: '44',

    MIYAZAKI: '45',

    KAGOSHIMA: '46',

    OKINAWA: '47'
} as const

export type PrefCode = typeof PrefCode[keyof typeof PrefCode]


export const isPrefCode = (s: string): s is PrefCode => Object.values(PrefCode).includes(s)

export const isHOKKAIDOU = (v: any): v is '1' => v === PrefCode.HOKKAIDOU
export const isAOMORI = (v: any): v is '2' => v === PrefCode.AOMORI
export const isIWATE = (v: any): v is '3' => v === PrefCode.IWATE
export const isMIYAGI = (v: any): v is '4' => v === PrefCode.MIYAGI
export const isAKITA = (v: any): v is '5' => v === PrefCode.AKITA
export const isYAMAGATA = (v: any): v is '6' => v === PrefCode.YAMAGATA
export const isFUKUSIMA = (v: any): v is '7' => v === PrefCode.FUKUSIMA
export const isIBARAKI = (v: any): v is '8' => v === PrefCode.IBARAKI
export const isTOCHIGI = (v: any): v is '9' => v === PrefCode.TOCHIGI
export const isGUNMA = (v: any): v is '10' => v === PrefCode.GUNMA
export const isSAITAMA = (v: any): v is '11' => v === PrefCode.SAITAMA
export const isCHIBA = (v: any): v is '12' => v === PrefCode.CHIBA
export const isTOKYO = (v: any): v is '13' => v === PrefCode.TOKYO
export const isKANAGAWA = (v: any): v is '14' => v === PrefCode.KANAGAWA
export const isNIGATA = (v: any): v is '15' => v === PrefCode.NIGATA
export const isTOYAMA = (v: any): v is '16' => v === PrefCode.TOYAMA
export const isISIKAWA = (v: any): v is '17' => v === PrefCode.ISIKAWA
export const isFUKUI = (v: any): v is '18' => v === PrefCode.FUKUI
export const isYAMANASHI = (v: any): v is '19' => v === PrefCode.YAMANASHI
export const isNAGANO = (v: any): v is '20' => v === PrefCode.NAGANO
export const isGIFU = (v: any): v is '21' => v === PrefCode.GIFU
export const isSHIZUOKA = (v: any): v is '22' => v === PrefCode.SHIZUOKA
export const isAICHI = (v: any): v is '23' => v === PrefCode.AICHI
export const isMIE = (v: any): v is '24' => v === PrefCode.MIE
export const isSIGA = (v: any): v is '25' => v === PrefCode.SIGA
export const isKYOTO = (v: any): v is '26' => v === PrefCode.KYOTO
export const isOSAKA = (v: any): v is '27' => v === PrefCode.OSAKA
export const isHYOGO = (v: any): v is '28' => v === PrefCode.HYOGO
export const isNARA = (v: any): v is '29' => v === PrefCode.NARA
export const isWAKAYAMA = (v: any): v is '30' => v === PrefCode.WAKAYAMA
export const isTOTTORI = (v: any): v is '31' => v === PrefCode.TOTTORI
export const isSIMANE = (v: any): v is '32' => v === PrefCode.SIMANE
export const isOKAYAMA = (v: any): v is '33' => v === PrefCode.OKAYAMA
export const isHIROSIMA = (v: any): v is '34' => v === PrefCode.HIROSIMA
export const isYAMAGUCHI = (v: any): v is '35' => v === PrefCode.YAMAGUCHI
export const isTOKUSHIMA = (v: any): v is '36' => v === PrefCode.TOKUSHIMA
export const isKAGAWA = (v: any): v is '37' => v === PrefCode.KAGAWA
export const isEHIME = (v: any): v is '38' => v === PrefCode.EHIME
export const isKOUCHI = (v: any): v is '39' => v === PrefCode.KOUCHI
export const isFUKUSHIMA = (v: any): v is '40' => v === PrefCode.FUKUSHIMA
export const isSAGA = (v: any): v is '41' => v === PrefCode.SAGA
export const isNAGASAKI = (v: any): v is '42' => v === PrefCode.NAGASAKI
export const isKUMAMOTO = (v: any): v is '43' => v === PrefCode.KUMAMOTO
export const isOITA = (v: any): v is '44' => v === PrefCode.OITA
export const isMIYAZAKI = (v: any): v is '45' => v === PrefCode.MIYAZAKI
export const isKAGOSHIMA = (v: any): v is '46' => v === PrefCode.KAGOSHIMA
export const isOKINAWA = (v: any): v is '47' => v === PrefCode.OKINAWA
