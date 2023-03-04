import { ReportDatabase } from "../database/ReportDatabase";
import { iPeriodDateDTO } from "../models/Report";

export class ReportBusiness {
    constructor(
        private reportDatabase: ReportDatabase
    ) { }
    // 1 - CARROS
    getAllCars = async () => {
        const cars = await this.reportDatabase.getAllCars()
        return cars
    }
    getAllCarsbyName = async () => {
        const cars = await this.reportDatabase.getAllCarsbyName()
        return cars

    }
    getCarsbyGender = async () => {
        const cars = await this.reportDatabase.getCarsbyGender()
        return cars

    }
    getBrandsbyCar = async () => {
        const cars = await this.reportDatabase.getBrandsbyCar()
        return cars

    }
    getBrandsbyGender = async () => {
        const cars = await this.reportDatabase.getBrandsbyGender()
        return cars

    }
    // 2 - PESSOAS
    getAllPersons = async () => {
        const person = await this.reportDatabase.getAllPerson()
        return person

    }
    getPersonAVG = async () => {
        const person = await this.reportDatabase.getPersonAVG()
        return person
        // Não consegui colocar toFixed(2) no resultado
    }
    // 3 - REVISÕES
    getPeriodDate = async (input: iPeriodDateDTO) => {
        let { datestartreview, dateendreview } = input
        const review = await this.reportDatabase.getPeriodDate(datestartreview, dateendreview)
        return review
    }
    getBrandsReview = async () => {
        const review = await this.reportDatabase.getBrandsReview()
        return review
    }
    getPersonReview = async () => {
        const review = await this.reportDatabase.getPersonReview()
        return review
    }
}