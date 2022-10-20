import styled from "styled-components"
import Header from "../Header/Header"
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";

export default function TodayHabits() {
    return (
        <StyledTodayHabits>
            <Header />
            <DayInfo>
                <h2>Segunda, 17/05</h2>
                <p>Nenhum hábito concluído ainda</p>
            </DayInfo>
            <ul>
                <li>
                    <div>

                        <h2>habito</h2>
                        <p>seq atual</p>
                        <p>recorde</p>
                    </div>
                    <IoIosCheckbox size={"100px"} color={"#8FC549"}/>
                    {/* <IoIosCheckboxOutline /> */}
                </li>
            </ul>
        </StyledTodayHabits>
    )
}

const StyledTodayHabits = styled.div`
    margin: 70px 0;
    padding: 0 20px;
    background-color: #E5E5E5;;
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