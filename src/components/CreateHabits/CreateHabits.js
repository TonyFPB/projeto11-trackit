import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { BsPlusSquareFill } from "react-icons/bs";
import Creating from "./Creating";
import CreatedHabit from "./CreatedHabit";
import useProviders from "../../Providers";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CreateHabits() {
    const [newHabit, setNewHabit] = useState(false)
    const [habits, setHabits] = useState([])
    const [inputHabit, setInputHabit] = useState('')
    const [daysList, setDaysList] = useState([])
    const [dHabit, setDhabit] = useState(false)
    const [cHabit, setCHabit] = useState(false)
    const { token } = useProviders()

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
                setDhabit(!dHabit)
                
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

        const promisse = axios.get(URL, config)
        promisse.then(res => { console.log(res); setHabits(res.data) })
        promisse.catch(err => console.log(err.response))
    }, [cHabit, dHabit])

    return (
        <StyledCreateHabits>
            <Header />
            <MyHabits>
                <h1>Meus Hábitos</h1>
                <BsPlusSquareFill onClick={() => setNewHabit(true)} color="#52B6FF" size="40px"></BsPlusSquareFill>
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
                    <EmptyHabits>
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
