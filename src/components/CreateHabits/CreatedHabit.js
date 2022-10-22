import styled from "styled-components"
import CreateWeekDays from "./CreateWeekDays"
import { BsTrash } from "react-icons/bs"

export default function CreatedHabit() {
    return (
        <StyledCreatedHabit>
            <div>
                <h1>Ler 1 capítulo de livro</h1>
                <BsTrash />
            </div>
            <CreateWeekDays />
        </StyledCreatedHabit>
    )
}

const StyledCreatedHabit = styled.li`
    background-color: #FFFFFF ;
    padding: 15px;
    margin: 18px 0 0 0;
    border-radius: 5px;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
    }
`