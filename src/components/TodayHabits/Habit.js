import axios from "axios";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import styled from "styled-components";
import useProviders from "../../Providers";
export default function Habit({ habit, setMakingHabit, markingHabit}) {
    const { token } = useProviders()
    const { id, name, done, currentSequence, highestSequence } = habit
    
    function markHabit() {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        if (done) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            const request = axios.post(URL, {}, config)
            request.then(res => { console.log(res); setMakingHabit(!markingHabit)})
            request.catch(err => console.log(err.response))

        }
        if (!done) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            const request = axios.post(URL, {}, config)
            request.then(res => { console.log(res); setMakingHabit(!markingHabit) })
            request.catch(err => console.log(err.response))
        }
    }
    return (
        <StyledHabit>
            <div>
                <h2>{name}</h2>
                <p>
                    Sequência atual: <StyledCountDays done={done}>{currentSequence} dias</StyledCountDays>
                    <br />
                    Seu recorde: <StyledCountDays done={(currentSequence >= highestSequence) && highestSequence !== 0}>{highestSequence} dias</StyledCountDays>
                </p>

            </div>
            <IoIosCheckbox onClick={markHabit} size={"100px"} color={done ? "#8FC549" : "#EBEBEB"} />
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
        width: 205px;
        word-wrap: break-word;
        color: #666666; 
        font-size: 19px;
        margin: 0 0 5px 0;
    }
    p{
        font-size: 13px;
        line-height: 20px;
    }
`
const StyledCountDays = styled.span`
    color: ${({ done }) => done ? "#8FC549" : "#666666"};
`