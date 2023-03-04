import styled from "styled-components";
import { Person } from "../../components/registerPerson/Person";

const MainContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:90vh;
width:100vw;
`

export function PagePerson() {
    return (
        <MainContainer>
            <Person />
        </MainContainer>
    )
}