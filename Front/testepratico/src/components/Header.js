import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalContext from "../Global/GlobalContext";

export const MainContainer = styled.div`
display:flex;
justify-content:center;
`
export const ContainerHeader = styled.div`
@media (min-width: 768px) {
    max-width:50%;
}
display:flex;
justify-content:space-between;
`
export const Button = styled.button`
background:none;
border:0;
background:#BA979B;
border-radius:3px;
padding:10px;
margin:10px;
color:white;
box-shadow: 3px 3px 9px #888888;
`

export function Header() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const goToCars = () => {
        navigate("/cars")
    }
    const goToReview = () => {
        navigate("/review")
    }
    const goToReport = () => {
        navigate("/report")
    }
    return (
        <MainContainer>
            <ContainerHeader>
                <Button onClick={goToHome}>Criar Perfil</Button>
                <Button onClick={goToCars}>Listar Carro</Button>
                <Button onClick={goToReview}>Listar Revisão</Button>
                <Button onClick={goToReport}>Tabelas</Button>
            </ContainerHeader>
        </MainContainer>
    )
}