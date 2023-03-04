import styled from "styled-components"

export const MainContainer = styled.div`
background-color:#cdb27b;
@media (min-width: 768px) {
    width:50vw;
}
height:50vh;
width:80vw;
border-radius:20px;
`
export const ContainerTitle = styled.div`
display:flex;
align-items:center;
color:black;
font-size:25px;
justify-content:center;
padding-bottom:70px;
padding-top:10px;
@media (max-width: 768px) {
    display:flex;
align-items:center;
color:black;
justify-content:center;
padding-bottom:20px;
padding-top:10px;
}
`
export const ContainerTitleEND = styled.div`
display:flex;
align-items:center;
justify-content:center;
color:black;
padding-bottom:10px;
@media (max-width: 768px) {
    font-size:12px;
}
`
export const ContainerMainDate = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-top:20px;
@media (max-width: 768px) {
    display:flex;
align-items:center;
justify-content:center;
padding-top:5px;
}
`
export const ContainerDate = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const ContainerMainForm = styled.div`
padding-bottom:30px;
`
export const Button = styled.button`
border:0px;
box-shadow: 2px 2px 4px black;
padding:6px;
border-radius:5px;
margin-top:20px;
`
export const ButtonEND = styled.button`
border:0px;
box-shadow: 2px 2px 4px black;
padding:6px;
border-radius:5px;
margin-top:25px;
`
export const Select = styled.select`
margin-right:10px;
border:0px;
@media (max-width: 768px) {
margin:5px;
margin-right:10px;
border:0px;
border-radius:7px;
}
`
export const ContainerButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
export const ContainerForm = styled.div`
@media (max-width: 768px) {
    display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
}
display:flex;
justify-content:center;
align-items:center;
`