import axios from "axios"
import { useContext, useState } from "react"
import GlobalContext from "../../Global/GlobalContext"
import { BASE_URL } from "../constants/urls"
import { Button, ContainerForm, ContainerInput, ContainerMainForm, ContainerMainInput, ContainerMainSelect, ContainerTitle, Form, MainContainer, Select } from "./StyledPerson"

export function Person() {
    const { } = useContext(GlobalContext)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")

    const addPerson = async () => {
        const bodyPerson = {
            name: name,
            age: +(age),
            gender: gender
        }
        await axios.post(`${BASE_URL}/person/signup`, bodyPerson).then(() => {
            alert("Pessoa Criada!")
        }).catch((erro) => {
            console.log(erro.response.data)
            alert(erro.response.data.message)
        })
    }
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    const onChangeGender = (event) => {
        setGender(event.target.value)
    }
    return (
        <MainContainer>
            <ContainerTitle>
                Person
            </ContainerTitle>
            <ContainerMainForm>
                <ContainerForm>
                    <Form>
                        <ContainerMainInput>
                            <ContainerInput placeholder="Nome" value={name} onChange={onChangeName} />
                        </ContainerMainInput>
                        <ContainerMainInput>
                            <ContainerInput placeholder="Idade" value={age} onChange={onChangeAge} type="number" min="18" />
                        </ContainerMainInput>
                        <ContainerMainSelect>
                            <Select value={gender} onChange={onChangeGender}>
                                <option value="" disabled selected hidden>Gênero</option>
                                <option value="MASCULINO">MASCULINO</option>
                                <option value="FEMININO">FEMININO</option>
                            </Select>
                        </ContainerMainSelect>
                    </Form>
                    <Button onClick={addPerson}>
                        Registrar Usuario
                    </Button>
                </ContainerForm>
            </ContainerMainForm>
        </MainContainer>
    )
}
