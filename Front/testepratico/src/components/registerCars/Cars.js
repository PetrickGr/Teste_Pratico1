import axios from "axios"
import { useContext, useState } from "react"
import GlobalContext from "../../Global/GlobalContext"
import { BASE_URL } from "../constants/urls"
import { Button, ContainerForm, ContainerInput, ContainerMainForm, ContainerMainInput, ContainerMainSelect, ContainerTitle, Form, MainContainer, Select } from "./StyledCars"

export function Cars() {
    const { allPerson } = useContext(GlobalContext)
    const [selectPerson, setSelectPerson] = useState("")
    const [licenseplate, setLicenseplate] = useState("")
    const [brands, setBrands] = useState("")
    const renderPerson = allPerson.map((person) => {
        return <option key={person.id} value={person.id}>{person.name}</option>
    })
    const addCar = () => {
        const bodyCar = {
            idperson: selectPerson,
            licenseplate: licenseplate,
            brands: brands
        }
        axios.post(`${BASE_URL}/cars/signCar`, bodyCar).then(() => {
            alert("Carro Registrado!")
        }).catch((erro) => {
            console.log(erro.response.data)
            alert(erro.response.data.message)
        })
    }
    const onChangePerson = (event) => {
        event.preventDefault()
        setSelectPerson(event.target.value)
    }
    const onChangePlate = (event) => {
        setLicenseplate(event.target.value)
    }
    const onChangeBrands = (event) => {
        setBrands(event.target.value)
    }

    return (
        <MainContainer>
            <ContainerTitle>
                Cars
            </ContainerTitle>
            <ContainerMainForm>
                <ContainerForm>
                    <Form>
                        <ContainerMainInput>
                            <ContainerInput placeholder="Plate" value={licenseplate} onChange={onChangePlate} maxLength="15" />
                        </ContainerMainInput>
                        <ContainerMainSelect>
                            <Select value={brands} onChange={onChangeBrands}>
                                <option value="" disabled selected hidden>Marcas</option>
                                <option value="FORD">FORD</option>
                                <option value="FIAT">FIAT</option>
                                <option value="RENAULT">RENAULT</option>
                            </Select>
                            <Select value={selectPerson} onChange={onChangePerson}>
                                <option value="" disabled selected hidden>Selecione</option>
                                {renderPerson}
                            </Select>
                        </ContainerMainSelect>
                    </Form>
                    <Button onClick={addCar}>
                        Registrar Carro
                    </Button>
                </ContainerForm>
            </ContainerMainForm>
        </MainContainer>
    )
}