import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import useProviders from "../../Providers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import Habit from "./Habit";

export default function TodayHabits() {
    const [habitsList, setHabitsList] = useState([])
    const { token } = useProviders()

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promisse = axios.get(URL, config)

        promisse.then(res => {
            console.log(res)
            setHabitsList(res.data)
        }
        )
        promisse.catch(err => console.log(err.response.data))
    }, [])
    return (
        <StyledTodayHabits>
            <Header />
            <DayInfo>
                <h2>Segunda, 17/05</h2>
                <p>Nenhum hábito concluído ainda</p>
            </DayInfo>
            <ul>
                {habitsList
                    ?
                    habitsList.map((h) => <Habit />)
                    :
                    <h1>Nenhum habito ainda</h1>
                }
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