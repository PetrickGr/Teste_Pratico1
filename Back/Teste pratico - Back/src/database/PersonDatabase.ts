import { Person, IPersonDB } from "../models/Person";
import { BaseDatabase } from "./BaseDatabase";

export class PersonDatabase extends BaseDatabase {
    public static Person = "person"

    public toPersonDBModel = (person: Person): IPersonDB => {
        const personDB: IPersonDB = {
            id: person.getId(),
            name: person.getName(),
            age: person.getAge(),
            gender: person.getGender()
        }
        return personDB
    }
    public createPerson = async (person: Person): Promise<void> => {
        const personDB = this.toPersonDBModel(person)
        await BaseDatabase
            .connection()
            .insert(personDB)
            .into(PersonDatabase.Person)
    }
    getAllPerson = async (): Promise<IPersonDB[] | undefined> => {
        const result: IPersonDB[] = await BaseDatabase.connection()
            .select("*")
            .from(PersonDatabase.Person)
        const showPersons = result.map((person) => {
            return ({
                id: person.id,
                name: person.name,
                age:person.age,
                gender: person.gender
            })
        })
        return showPersons
    }
}