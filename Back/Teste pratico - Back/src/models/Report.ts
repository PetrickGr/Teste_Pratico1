export interface iReportAllDB {
    name: string
    licenseplate: string
}
export interface iReportGenderDB {
    gender?: string
    count?: number
}
export interface iReportPersonAVGDB {
    gender?: string
    avg?: number
}
export interface iReportBrandsDB {
    brands?: string
    count?: number | number
}
export interface iPeriodDateDB {
    id?: string
    datestartreview?: number
}
export interface iPeriodDateDTO {
    datestartreview: string
    dateendreview: string
}
export interface iBrandsReviewDTO {
    brands?: string
    count?: number
}
export interface iPersonReviewDTO {
    name?: string
    count?: number
}

