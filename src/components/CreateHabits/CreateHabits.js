import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { BsPlusSquareFill } from "react-icons/bs";

export default function CreateHabits(){
    return (
        <StyledCreateHabits>
            <Header/>
                <MyHabits>
                    <h1>Meus Hábitos</h1>
                    <BsPlusSquareFill color="#52B6FF" size="40px"></BsPlusSquareFill>
                </MyHabits>
                <Creating>
                    <input/>
                </Creating>
            <Footer/>
        </StyledCreateHabits>
    )
}

const StyledCreateHabits = styled.div`
    margin:70px 0;
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca';
    font-style: normal;
`
const MyHabits = styled.div`
    margin:22px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126BA5;
`
const Creating = styled.div`
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
`