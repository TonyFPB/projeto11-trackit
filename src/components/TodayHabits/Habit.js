import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import styled from "styled-components";
export default function Habit() {
    return (
        <StyledHabit>
            <div>
                <h2>Ler 1 capítulo de livro</h2>
                <p>Sequência atual: <span>4 dias</span><br />Seu recorde: <span>5 dias</span></p>

            </div>
            <IoIosCheckbox size={"100px"} color={"#8FC549"} />
            {/* <IoIosCheckboxOutline /> */}
        </StyledHabit>
    )
}

const StyledHabit = styled.li`
    margin: 0 0 10px 0;
    width: 100%;
    height: max-content;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;

    div{
        margin: 15px;
        color: #666666;
        font-family: 'Lexend Deca';
    }
    h2{
        color: #666666; 
        font-size: 19px;
        margin: 0 0 5px 0;
    }
    p{
        font-size: 13px;
        line-height: 20px;
    }
    span{
        color: #8FC549;
    }
`