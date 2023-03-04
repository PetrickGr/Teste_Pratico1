import { count } from "console";
import { ICarsDB } from "../models/Cars";
import { IPersonDB } from "../models/Person";
import { iBrandsReviewDTO, iPeriodDateDB, iPeriodDateDTO, iPersonReviewDTO, iReportAllDB, iReportBrandsDB, iReportGenderDB, iReportPersonAVGDB } from "../models/Report";
import { BaseDatabase } from "./BaseDatabase";

export class ReportDatabase extends BaseDatabase {
    public static Person = "person"
    public static Cars = "cars"
    public static Reviews = "reviews"
    public static Link_Ids = "link_ids"


    // 1 - CARROS
    public getAllCars = async (): Promise<ICarsDB[] | undefined> => {
        const result: ICarsDB[] = await BaseDatabase.connection()
            .select("*")
            .from(ReportDatabase.Cars)
        const showCars = result.map((cars) => {
            return ({
                id: cars.id,
                licenseplate: cars.licenseplate,
                brands: cars.brands
            })
        })
        return showCars
    }
    public getAllCarsbyName = async (): Promise<iReportAllDB[] | undefined> => {
        const result: iReportAllDB[] = await BaseDatabase.connection()
            .select(`${ReportDatabase.Person}.name`, `${ReportDatabase.Cars}.licenseplate`)
            .from(ReportDatabase.Link_Ids)
            .innerJoin(`${ReportDatabase.Cars}`, `${ReportDatabase.Cars}.id`, '=', `${ReportDatabase.Link_Ids}.idcar`)
            .innerJoin(`${ReportDatabase.Person}`, `${ReportDatabase.Person}.id`, '=', `${ReportDatabase.Link_Ids}.idperson`)
            .orderBy(`${ReportDatabase.Person}.name`, 'asc')
        const showCarsName = result.map((cars) => {
            return ({
                name: cars.name,
                licenseplate: cars.licenseplate
            })
        })
        return showCarsName
    }
    public getCarsbyGender = async (): Promise<iReportGenderDB[] | undefined> => {
        const result: iReportGenderDB[] = await BaseDatabase.connection()
            .select(`${ReportDatabase.Person}.gender`).count(`${ReportDatabase.Person}.gender`)
            .from(ReportDatabase.Link_Ids)
            .innerJoin(`${ReportDatabase.Cars}`, `${ReportDatabase.Cars}.id`, '=', `${ReportDatabase.Link_Ids}.idcar`)
            .innerJoin(`${ReportDatabase.Person}`, `${ReportDatabase.Person}.id`, '=', `${ReportDatabase.Link_Ids}.idperson`)
            .groupBy(`${ReportDatabase.Person}.gender`)
        return result
    }
    public getBrandsbyCar = async (): Promise<iReportBrandsDB[] | undefined> => {
        const result: iReportBrandsDB[] = await BaseDatabase.connection()
            .select(`${ReportDatabase.Cars}.brands`).count(`${ReportDatabase.Cars}.licenseplate`)
            .from(ReportDatabase.Link_Ids)
            .innerJoin(`${ReportDatabase.Cars}`, `${ReportDatabase.Cars}.id`, '=', `${ReportDatabase.Link_Ids}.idcar`)
            .innerJoin(`${ReportDatabase.Person}`, `${ReportDatabase.Person}.id`, '=', `${ReportDatabase.Link_Ids}.idperson`)
            .groupBy(`${ReportDatabase.Cars}.brands`)
            .orderBy('count', 'asc')
        const showCarsBrand = result.map((cars) => {
            return ({
                brands: cars.brands,
                total: cars.count
            })
        })
        return showCarsBrand
    }
    public getBrandsbyGender = async (): Promise<iReportGenderDB[] | undefined> => {
        const result: iReportGenderDB[] = await BaseDatabase.connection()
            .select(`${ReportDatabase.Person}.gender`).count(`${ReportDatabase.Cars}.brands`)
            .from(ReportDatabase.Link_Ids)
            .innerJoin(`${ReportDatabase.Cars}`, `${ReportDatabase.Cars}.id`, '=', `${ReportDatabase.Link_Ids}.idcar`)
            .innerJoin(`${ReportDatabase.Person}`, `${ReportDatabase.Person}.id`, '=', `${ReportDatabase.Link_Ids}.idperson`)
            .groupBy(`${ReportDatabase.Person}.gender`)
            .orderBy('count', 'desc')
        const showBrandsGender = result.map((cars) => {
            return ({
                gender: cars.gender,
                count: cars.count
            })
        })
        return showBrandsGender
    }
    // 2 - PESSOAS
    public getAllPerson = async (): Promise<IPersonDB[] | undefined> => {
        const result: IPersonDB[] = await BaseDatabase.connection()
            .select("*")
            .from(ReportDatabase.Person)
        const showPersons = result.map((persons) => {
            return ({
                id: persons.id,
                name: persons.name,
                age: persons.age,
                gender: persons.gender
            })
        })
        return showPersons
    }
    public getPersonAVG = async (): Promise<iReportPersonAVGDB[] | undefined> => {
        const result: iReportPersonAVGDB[] = await BaseDatabase.connection()
            .select(`${ReportDatabase.Person}.gender`).avg(`${ReportDatabase.Person}.age`)
            .from(ReportDatabase.Link_Ids)
            .innerJoin(`${ReportDatabase.Cars}`, `${ReportDatabase.Cars}.id`, '=', `${ReportDatabase.Link_Ids}.idcar`)
            .innerJoin(`${ReportDatabase.Person}`, `${ReportDatabase.Person}.id`, '=', `${ReportDatabase.Link_Ids}.idperson`)
            .groupBy(`${ReportDatabase.Person}.gender`)
            .orderBy('avg', 'desc')
        const showAVG = result.map((person) => {
            return ({
                gender: person.gender,
                AVG: person.avg
            })
        })
        return showAVG
    }
    // 3 - REVISÕES

    public getPeriodDate = async (dateStart: string, dateEnd: string): Promise<iPeriodDateDB[] | undefined> => {
        const result: iPeriodDateDB[] = await BaseDatabase.connection()
            .select(`${ReportDatabase.Reviews}.id`, `${ReportDatabase.Reviews}.datestartreview`)
            .from(ReportDatabase.Link_Ids)
            .innerJoin(`${ReportDatabase.Cars}`, `${ReportDatabase.Cars}.id`, '=', `${ReportDatabase.Link_Ids}.idcar`)
            .innerJoin(`${ReportDatabase.Reviews}`, `${ReportDatabase.Reviews}.id`, '=', `${ReportDatabase.Link_Ids}.idreview`)
            .where(`${ReportDatabase.Reviews}.datestartreview`, '>=', `${dateStart}`)
            .andWhere(`${ReportDatabase.Reviews}.datestartreview`, '<=', `${dateEnd}`)
        const showPeriod = result.map((review) => {
            return ({
                id: review.id,
                datestartreview: review.datestartreview
            })
        })
        return showPeriod
    }
    public getBrandsReview = async (): Promise<iBrandsReviewDTO[] | undefined> => {
        const result: iBrandsReviewDTO[] = await BaseDatabase.connection()
            .select(`${ReportDatabase.Cars}.brands`).count(`${ReportDatabase.Reviews}.id`)
            .from(ReportDatabase.Link_Ids)
            .innerJoin(`${ReportDatabase.Cars}`, `${ReportDatabase.Cars}.id`, '=', `${ReportDatabase.Link_Ids}.idcar`)
            .innerJoin(`${ReportDatabase.Reviews}`, `${ReportDatabase.Reviews}.id`, '=', `${ReportDatabase.Link_Ids}.idreview`)
            .groupBy(`${ReportDatabase.Cars}.brands`)
            .orderBy('count', 'desc')
        const showReview = result.map((review) => {
            return ({
                brands: review.brands,
                count: review.count
            })
        })
        return showReview
    }
    public getPersonReview = async (): Promise<iPersonReviewDTO[] | undefined> => {
        const result: iPersonReviewDTO[] = await BaseDatabase.connection()
            .select(`${ReportDatabase.Person}.name`).count(`${ReportDatabase.Reviews}.id`)
            .from(ReportDatabase.Link_Ids)
            .innerJoin(`${ReportDatabase.Person}`, `${ReportDatabase.Person}.id`, '=', `${ReportDatabase.Link_Ids}.idperson`)
            .innerJoin(`${ReportDatabase.Reviews}`, `${ReportDatabase.Reviews}.id`, '=', `${ReportDatabase.Link_Ids}.idreview`)
            .groupBy(`${ReportDatabase.Person}.name`)
            .orderBy('count', 'desc')
        const showReview = result.map((review) => {
            return ({
                name: review.name,
                count: review.count
            })
        })
        return showReview
    }
}