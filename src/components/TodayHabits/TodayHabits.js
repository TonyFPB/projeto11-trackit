import styled from "styled-components"
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import Habit from "./Habit";

export default function TodayHabits() {
    return (
        <StyledTodayHabits>
            <Header />
            <DayInfo>
                <h2>Segunda, 17/05</h2>
                <p>Nenhum hábito concluído ainda</p>
            </DayInfo>
            <ul>
                <Habit />
                <Habit />
                <Habit/>
                <Habit/>
                <Habit/>
                <Habit/>
                <Habit/>
                <Habit/>
                <Habit/>
            </ul>
            <Footer />
        </StyledTodayHabits>
    )
}

const StyledTodayHabits = styled.div`
    height: 100%;
    margin: 70px 0 70px 0;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    
`
const DayInfo = styled.div`
    margin: 28px 0 ;
    h2{
        font-family: 'Lexend Deca';
        font-size: 23px;
        color: #126BA5;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;    
        color: #BABABA; /*varia para color: #8FC549;*/
    }
`