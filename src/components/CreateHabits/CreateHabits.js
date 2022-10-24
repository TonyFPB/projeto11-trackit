import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { BsPlusSquareFill } from "react-icons/bs";
import Creating from "./Creating";
import CreatedHabit from "./CreatedHabit";
import useProviders from "../../Providers";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledNotLoggedIn } from "../Assets/Styles/Styles";

export default function CreateHabits() {
    const navigate = useNavigate()
    const [newHabit, setNewHabit] = useState(false)
    const [habits, setHabits] = useState([])
    const [inputHabit, setInputHabit] = useState('')
    const [daysList, setDaysList] = useState([])
    const [dHabit, setDhabit] = useState(false)
    const [cHabit, setCHabit] = useState(false)
    const { token, trackProgress, setTrackProgress, setPercentProgress } = useProviders()

    function deleteHabit(idDeleteHabit) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idDeleteHabit}`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        if (window.confirm('Tem certeza que deseja deletar?')) {
            const promisse = axios.delete(URL, config)
            promisse.then(res => {
                trackProgress.forEach((h) => {
                    if (idDeleteHabit === h.id) {
                        const newTrack = trackProgress.filter((hab) => hab.id !== idDeleteHabit)
                        const total = newTrack.length
                        const doneHabits = newTrack.filter((hab) => hab.done).length
                        const newProgress = (doneHabits / total) * 100
                        setPercentProgress(newProgress)
                        setTrackProgress(newTrack)
                    }
                });
                setDhabit(!dHabit)
                //nao manda nada no data
            })
            promisse.catch(err => err.response)
        }
    }

    // [{id: 41241, name: 'Dar atencao pro mo', days: Array(3)},....]
    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        if (token !== undefined) {
            const promisse = axios.get(URL, config)
            promisse.then(res => { setHabits(res.data) })
            promisse.catch(err => console.log(err.response))
        }

    }, [cHabit, dHabit])

    if (token === undefined) {
        return (
            <StyledCreateHabits>
                <Header />
                <StyledNotLoggedIn>
                    <h1>Você não esta mais logado!</h1>
                    <button onClick={() => navigate('/')}>Retornar para a tela de login</button>
                </StyledNotLoggedIn>
                <Footer />
            </StyledCreateHabits>
        )
    }
    return (
        <StyledCreateHabits>
            <Header />
            <MyHabits>
                <h1>Meus Hábitos</h1>
                <BsPlusSquareFill data-identifier="create-habit-btn" onClick={() => setNewHabit(true)} color="#52B6FF" size="40px"></BsPlusSquareFill>
            </MyHabits>
            {newHabit && <Creating
                daysList={daysList}
                setDaysList={setDaysList}
                inputHabit={inputHabit}
                setInputHabit={setInputHabit}
                cHabit={cHabit}
                setCHabit={setCHabit}
                setNewHabit={setNewHabit} />}
            <ul>
                {habits.length > 0
                    ?
                    habits.map((h) => <CreatedHabit key={h.id} habit={h} deleteHabit={deleteHabit} />)
                    :
                    <EmptyHabits data-identifier="no-habit-message">
                        Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!
                    </EmptyHabits >
                }
            </ul>

            <Footer />
        </StyledCreateHabits >
    )
}

const StyledCreateHabits = styled.div`
    margin:100px 0;
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca';
    font-style: normal;
`
const EmptyHabits = styled.li`
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
