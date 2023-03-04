export interface ICarsDB {
    id: string
    licenseplate: string
    brands: string
}
export interface signupCarsDTO {
    idperson: string
    licenseplate: string
    brands: string
}
export interface Brands {
    [brand: string]: string
}

export class Cars {
    constructor(
        private id: string,
        private licenseplate: string,
        private brands: string
    ) { }
    public getId = () => {
        return this.id
    }
    public getlicensePlate = () => {
        return this.licenseplate
    }
    public getBrands = () => {
        return this.brands
    }
    public setId = (newId: string) => {
        this.id = newId
    }
    public setName = (newPlate: string) => {
        this.licenseplate = newPlate
    }
    public setBrands = (newBrand: string) => {
        this.brands = newBrand
    }
}

