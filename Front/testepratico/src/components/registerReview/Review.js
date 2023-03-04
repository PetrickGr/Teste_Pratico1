import axios from "axios"
import moment from "moment/moment"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../Global/GlobalContext"
import { BASE_URL } from "../constants/urls"
import { Button, ButtonEND, ContainerButton, ContainerDate, ContainerForm, ContainerMainDate, ContainerMainForm, ContainerTitle, ContainerTitleEND, MainContainer, Select } from "./StyledReview"

export function Review() {
    const { allCars, allPerson, allReview, allCarsAndDate } = useContext(GlobalContext)
    const [selectPerson, setSelectPerson] = useState("")
    const [selectPlate, setSelectPlate] = useState("")
    const [datestartreview, setDateStartReview] = useState("")
    const [idReview, setIDReview] = useState(null)
    const [renderDate, setRenderDate] = useState("")
    const [finishReviewState, setfinishReviewState] = useState(false)
    const [addReviewState, setaddReviewState] = useState(false)
    const actualDate = Date()
    const actualDateFormated = moment(actualDate).format("YYYY-MM-DD")
    const renderPerson = allPerson?.map((person) => {
        return <option key={person?.id} value={person?.id}>{person?.name}</option>
    })
    const renderCars = allCars?.map((car) => {
        return <option key={car?.id} value={car?.id}>{car?.licenseplate}</option>
    })
    const renderCarsDate = allCarsAndDate?.map((car) => {
        return <option key={car?.id} value={car?.id}>{car?.licenseplate}</option>
    })
    const addReview = async() => {
        const bodyReview = {
            idperson: selectPerson,
            idcar: selectPlate,
            datestartreview: datestartreview
        }
        await axios.post(`${BASE_URL}/review/signReview`, bodyReview).then(() => {
            alert("Carro Registrado!")
            setaddReviewState(!addReviewState)
            console.log(addReviewState)
        }).catch((erro) => {
            console.log(erro.response.data)
            alert(erro.response.data.message)
        })
    }
    const finishReview = async () => {
        const bodyFinish = {
            id: renderDate.id,
            dateendreview: actualDateFormated
        }
        await axios.put(`${BASE_URL}/review/finish`, bodyFinish).then(() => {
            alert("Revisão Finalizada!")
            setfinishReviewState(!finishReviewState)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    const onChangePerson = (event) => {
        event.preventDefault()
        setSelectPerson(event.target.value)
    }
    const onChangePlate = (event) => {
        setSelectPlate(event.target.value)
    }
    const onChangeDate = (event) => {
        setDateStartReview(event.target.value)
    }
    const onChangeReview = (event) => {
        setIDReview(event.target.value)
    }
    const requestDate = async () => {
        await axios.get(`${BASE_URL}/review/CarID/${idReview}`).then((response) => {
            setRenderDate(response.data)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    useEffect(() => {
        requestDate()
    }, [idReview, finishReviewState, addReviewState])
    const dateStartFormat = renderDate?.datestartreview?.split("T")
    const dateEndFormat = renderDate?.dateendreview?.split("T")
    return (
        <MainContainer>
            <ContainerTitle>
                Review
            </ContainerTitle>
            <ContainerMainForm>
                <ContainerForm>
                    <Select value={selectPerson} onChange={onChangePerson}>
                        <option value="" disabled selected hidden>Selecione</option>
                        {renderPerson}
                    </Select>
                    <Select value={selectPlate} onChange={onChangePlate}>
                        <option value="" disabled selected hidden>Selecione</option>
                        {renderCars}
                    </Select>
                    <form>
                        <input id="date" type="date" onChange={onChangeDate} />
                    </form>
                </ContainerForm>
                <ContainerButton>
                    <Button onClick={addReview}>
                        Registrar Revisão
                    </Button>
                </ContainerButton>
            </ContainerMainForm>
            <ContainerMainForm>
                <ContainerTitleEND>
                    Selecione abaixo o carro que deseja visualizar a revisão
                </ContainerTitleEND>
                <ContainerForm>
                    <Select value={idReview} onChange={onChangeReview}>
                        <option value="" disabled selected hidden>Selecione</option>
                        {renderCarsDate}
                    </Select>
                </ContainerForm>
                <ContainerMainDate>
                    {renderDate && <ContainerDate>
                        <div>Inicio da revisão: {dateStartFormat[0]}</div>
                        <div>Fim da revisão: {!dateEndFormat ? "Em andamento" : dateEndFormat[0]}</div>
                        {!dateEndFormat &&
                            <ButtonEND onClick={finishReview}>
                                Finalizar
                            </ButtonEND>}
                    </ContainerDate>}
                </ContainerMainDate>
            </ContainerMainForm>
        </MainContainer>
    )
}