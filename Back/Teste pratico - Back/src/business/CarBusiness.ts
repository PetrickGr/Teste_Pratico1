import { CarDatabase } from "../database/CarDatabase";
import { ParamsError } from "../errors/ParamsError";
import { Brands, Cars, signupCarsDTO } from "../models/Cars";
import { responseSign, responseSignID } from "../models/Person";
import { IdGenerator } from "../services/IdGenerator";

export class CarBusiness {
    constructor(
        private carDatabase: CarDatabase,
        private idGenerator: IdGenerator
    ) { }
    signupCar = async (input: signupCarsDTO) => {
        let { idperson, licenseplate, brands } = input
        const CheckBrands: Brands = {
            FORD: "FORD",
            FIAT: "FIAT",
            RENAULT: "RENAULT"
        };
        if (!licenseplate || licenseplate.length < 3) {
            throw new ParamsError("Insira um nome valido!")
        }
        if (typeof licenseplate !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (typeof brands !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (!CheckBrands[brands]) {
            throw new ParamsError(`Insira uma marca registrada!(FORD; FIAT; RENAULT)`)
        }
        const checkPlate = await this.carDatabase.getUniquePlate(licenseplate)
        if (checkPlate) {
            throw new ParamsError(`Placa ja registrada!`)
        }
        const idcar = this.idGenerator.generate()
        const car = new Cars(
            idcar,
            licenseplate,
            brands
        )
        await this.carDatabase.createCar(car)
        await this.carDatabase.linkCarPerson(idperson, idcar)
        const response: responseSignID = {
            message: "Cadastro realizado com sucesso",
            id: `IDCAR:${idcar}`
        }
        return response
    }
    getCars = async () => {
        const cars = await this.carDatabase.getAllCars()
        return cars
    }
}