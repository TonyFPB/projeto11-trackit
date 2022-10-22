import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { BsPlusSquareFill } from "react-icons/bs";
import Creating from "./Creating";
import CreatedHabit from "./CreatedHabit";
import useProviders from "../../Providers";
import { useState } from "react";

export default function CreateHabits() {
    const [newHabit,setNewHabit] = useState(false)
    
    return (
        <StyledCreateHabits>
            <Header />
            <MyHabits>
                <h1>Meus Hábitos</h1>
                <BsPlusSquareFill onClick={()=>setNewHabit(true)} color="#52B6FF" size="40px"></BsPlusSquareFill>
            </MyHabits>
            {newHabit && <Creating  setNewHabit={setNewHabit}/>}
            <ul>
                {/* <CreatedHabit/> */}
            </ul>
            <EmptyHabits>
                Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!
            </EmptyHabits >
            <Footer />
        </StyledCreateHabits >
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
const EmptyHabits = styled.p`
    margin-top: 30px;
    color: #666666;
    font-size: 18px;
`
const MyHabits = styled.div`
    margin:22px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    color: #126BA5;
`
