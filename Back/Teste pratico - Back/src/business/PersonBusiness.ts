import { PersonDatabase } from "../database/PersonDatabase";
import { ParamsError } from "../errors/ParamsError";
import { GENDER, Person, responseSign, responseSignID, signupPersonDTO } from "../models/Person";
import { IdGenerator } from "../services/IdGenerator";

export class PersonBusiness {
    constructor(
        private personDatabase: PersonDatabase,
        private idGenerator: IdGenerator
    ) { }
    signupPerson = async (input: signupPersonDTO) => {
        let { name, age, gender } = input
        const CheckGender = {
            MASCULINO: "MASCULINO",
            FEMININO: "FEMININO"
        };
        if (!name || name.length < 3) {
            throw new ParamsError("Insira um nome valido!")
        }
        if (typeof name !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (typeof gender !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (!age || age <= 17) {
            throw new ParamsError("Insira uma idade valida!")
        }
        if (typeof age !== "number") {
            throw new ParamsError("Insira um numero!")
        }
        if (!CheckGender[gender]) {
            throw new ParamsError(`Insira um genero valido!(MASCULINO ou FEMININO)`)
        }
        const id = this.idGenerator.generate()
        const person = new Person(
            id,
            name,
            age,
            gender
        )
        await this.personDatabase.createPerson(person)
        const response: responseSignID = {
            message: "Cadastro realizado com sucesso",
            id: `ID USER: ${id}`
        }
        return response
    }
    getPersons = async () => {
        const persons = await this.personDatabase.getAllPerson()
        return persons
    }
}