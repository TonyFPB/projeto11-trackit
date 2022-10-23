import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components"
import useProviders from "../../Providers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import Habit from "./Habit";

export default function TodayHabits() {
    const [habitsList, setHabitsList] = useState([])
    const [date, setDate] = useState('')
    const [markingHabit, setMakingHabit] = useState(false)
    const { token, setPercentProgress,percentProgress,setTrackProgress} = useProviders()

    function showDate() {
        const week = { 0: 'Domingo', 1: 'Segunda', 2: 'Terça', 3: 'Quarta', 4: 'Quinta', 5: 'Sexta', 6: 'Sábado' }
        const d = dayjs()
        const weekDay = d.day()
        const day = d.date()
        const month = d.month() + 1
        setDate(`${week[weekDay]}, ${day}/${month}`)
    }
    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promisse = axios.get(URL, config)

        promisse.then(res => {
            showDate()
            setHabitsList(res.data)
            setTrackProgress(res.data.map((h)=>{return {id:h.id,done:h.done}}))
            setPercentProgress((res.data.filter((h) => h.done).length/res.data.length)*100)
        }
        )
        promisse.catch(err => console.log(err.response.data))
    }, [markingHabit])
    
    return (
        <StyledTodayHabits>
            <Header />
            <DayInfo habitsDone={percentProgress!==0}>
                <h2>{date}</h2>
                <p>{percentProgress!==0? `${percentProgress.toFixed(0).replace('.',',')}% dos hábitos concluídos` :"Nenhum hábito concluído ainda"}</p>
            </DayInfo>
            <ul>
                {habitsList
                    ?
                    habitsList.map((h) => <Habit key={h.id} habit={h} setMakingHabit={setMakingHabit} markingHabit={markingHabit} />)
                    :
                    <h1>Nenhum habito ainda</h1>
                }
            </ul>
            <Footer habitsList={habitsList} />
        </StyledTodayHabits>
    )
}

const StyledTodayHabits = styled.div`
    height: 100%;
    margin: 100px 0 70px 0;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
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
        color: ${props=>props.habitsDone?'#8FC549':"#BABABA"}; /*varia para color: #8FC549;*/
    }
`