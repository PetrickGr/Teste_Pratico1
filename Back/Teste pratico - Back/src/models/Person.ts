export enum GENDER {
    MALE = "MASCULINO",
    FEMALE = "FEMININO"
}

export interface IPersonDB {
    id: string
    name: string
    age:number
    gender: GENDER
}
export interface signupPersonDTO {
    name: string
    age:number
    gender: GENDER
}
export interface responseSign {
    message: string
}
export interface responseSignID {
    message: string
    id:string
}

export class Person {
    constructor(
        private id: string,
        private name: string,
        private age:number,
        private gender: GENDER,
    ) { }
    public getId = () => {
        return this.id
    }
    public getName = () => {
        return this.name
    }
    public getAge = () => {
        return this.age
    }
    public getGender = () => {
        return this.gender
    }
    public setId = (newId: string) => {
        this.id = newId
    }
    public setName = (newName: string) => {
        this.name = newName
    }
    public setAge = (newAge: number) => {
        this.age = newAge
    }
    public setGender = (newGender: GENDER) => {
        this.gender = newGender
    }
}