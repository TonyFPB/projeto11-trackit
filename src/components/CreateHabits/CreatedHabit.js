import styled from "styled-components"
import { StyledDay, StyledWeekDays } from "./CreateWeekDays"
import { BsTrash } from "react-icons/bs"


export default function CreatedHabit({habit,deleteHabit}) {
    const {id,name,days} = habit
    
    return (
        <StyledCreatedHabit>
            <div>
                <h1 data-identifier="habit-name">{name}</h1>
                <BsTrash data-identifier="delete-habit-btn" onClick={()=>deleteHabit(id)}/>
            </div>
            <StyledWeekDays>
                <StyledDay daysListBool={days.includes(0)}>D</StyledDay>
                <StyledDay daysListBool={days.includes(1)}>S</StyledDay>
                <StyledDay daysListBool={days.includes(2)}>T</StyledDay>
                <StyledDay daysListBool={days.includes(3)}>Q</StyledDay>
                <StyledDay daysListBool={days.includes(4)}>Q</StyledDay>
                <StyledDay daysListBool={days.includes(5)}>S</StyledDay>
                <StyledDay daysListBool={days.includes(6)}>S</StyledDay>
            </StyledWeekDays>
        </StyledCreatedHabit>
    )
}

const StyledCreatedHabit = styled.li`
    background-color: #FFFFFF ;
    padding: 15px;
    margin: 18px 0 0 0;
    border-radius: 5px;
    word-wrap: break-word;
    div{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        word-wrap: break-word;
        h1{
            width: 90%;
            /* background-color: blue; */
        }
    }
`