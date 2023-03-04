export interface IReviewDB {
    id: string
    datestartreview: String
    dateendreview?: string | null
}
export interface signupReviewDTO {
    idperson: string
    idcar: string
    datestartreview: String
}
export interface finishReviewDTO {
    id: string
    dateendreview: String
}
export interface IDateDB{
    id:string
}
export interface carAndDateDB {
    licenseplate: string
    idreview: String
}
export interface ILinkIdsDB {
    idperson: string
    idcar: string
    idreview?: string
}

export class Review {
    constructor(
        private id: string,
        private dateStartReview: String
    ) { }
    public getId = () => {
        return this.id
    }
    public getdateStartReview = () => {
        return this.dateStartReview
    }
    public setId = (newId: string) => {
        this.id = newId
    }
    public setdateStartReview = (newDate: String) => {
        this.dateStartReview = newDate
    }
}
export class Link {
    constructor(
        private idReview: string,
        private idCar: string,
        private idPerson: string
    ) { }
    public getidReview = () => {
        return this.idReview
    }
    public getidCar = () => {
        return this.idCar
    }
    public getidPerson = () => {
        return this.idPerson
    }
    public setIdReview = (newId: string) => {
        this.idReview = newId
    }
    public setIdCar = (newIdCar: string) => {
        this.idCar = newIdCar
    }
    public setIdPerson = (newIdPerson: string) => {
        this.idPerson = newIdPerson
    }
}