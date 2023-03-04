import { Cars, ICarsDB, signupCarsDTO } from "../models/Cars";
import { BaseDatabase } from "./BaseDatabase";

export class CarDatabase extends BaseDatabase {
    public static Cars = "cars"
    public static Link_Car = "link_ids"

    public toCarDBModel = (car: Cars): ICarsDB => {
        const carDB: ICarsDB = {
            id: car.getId(),
            licenseplate: car.getlicensePlate(),
            brands: car.getBrands()
        }
        return carDB
    }
    public createCar = async (car: Cars): Promise<void> => {
        const carDB = this.toCarDBModel(car)
        await BaseDatabase
            .connection()
            .insert(carDB)
            .into(CarDatabase.Cars)
    }
    public linkCarPerson = async (idperson: string, idcar: string): Promise<void> => {
        await BaseDatabase.connection()
            .insert({
                idperson,
                idcar
            })
            .into(CarDatabase.Link_Car)
    }
    public getUniquePlate = async (licenseplate: string): Promise<signupCarsDTO | undefined> => {
        const result: signupCarsDTO[] = await BaseDatabase.connection()
            .select("*")
            .from(CarDatabase.Cars)
            .where({ licenseplate })
        return result[0]
    }
    getAllCars = async (): Promise<ICarsDB[] | undefined> => {
        const result: ICarsDB[] = await BaseDatabase.connection()
            .select("*")
            .from(CarDatabase.Cars)
        const showCars = result.map((cars) => {
            return ({
                id: cars.id,
                licenseplate: cars.licenseplate,
                brands: cars.brands
            })
        })
        return showCars
    }
}