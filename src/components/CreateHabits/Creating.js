
import { useState } from "react"
import styled from "styled-components"
import useProviders from "../../Providers"
import CreateWeekDays from "./CreateWeekDays"
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios"


export default function Creating({ setNewHabit }) {
    const [inputHabit, setInputHabit] = useState('')
    const [daysList, setDaysList] = useState([])
    const [loading, setLoading] = useState(false)
    const { token } = useProviders()
    
    function sendHabit() {

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        if (inputHabit !== '' && daysList.length !== 0) {
            setLoading(true)
            const body = {
                name: inputHabit,
                days:daysList
            }
            const promisse = axios.post(URL,body,config)
            promisse.then(res=>{console.log(res);setNewHabit(false)})
            promisse.catch(err=>console.log(err.response))
        }
    }
    return (
        <StyledCreating>
            <input
                onChange={(e) => setInputHabit(e.target.value)}
                value={inputHabit}
                placeholder="nome do hábito"
            />
            <CreateWeekDays setDaysList={setDaysList} daysList={daysList} />
            <div>
                <CancelButton onClick={()=>setNewHabit(false)}>Cancelar</CancelButton>
                <SaveButton onClick={sendHabit}>
                    {loading
                        ?
                        <ThreeDots
                            height="40"
                            width="40"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                        :
                        "Salvar"
                    }
                </SaveButton>
            </div>
        </StyledCreating>
    )
}
const StyledCreating = styled.div`
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    div{
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-size:20px;
    }
    input::placeholder{
        font-family: 'Lexend Deca';
        font-size:20px;
        color: #DBDBDB;
    }
    button{
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-size: 16px;
        border-radius: 5px;
        border-style: none;
    }
`

const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 35px;
    background-color:#52B6FF;
    color: #FFFFFF;
    svg{
        margin-bottom:30px;
    }
`

const CancelButton = styled.button`
    background-color: #FFFFFF;
    color: #52b6ff;
`