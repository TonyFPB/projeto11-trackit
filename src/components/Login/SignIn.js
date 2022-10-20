import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Assets/Logo.jpg'
import { StyledSign } from "../Assets/Styles/Styles"
import FormsSignIn from './FormsSignIn'
import axios from "axios";
import { useState } from 'react';
import styled from 'styled-components';

export default function SignIn({ setToken }) {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState(false)
    const [loading,setLoading] = useState(false)

    function loggingOn(e) {
        e.preventDefault();
        setLoading(true)
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const body = {
            email,
            password
        }
        const request = axios.post(URL, body)

        request.then(res => {
            setLoading(false)
            setToken(res.data.token)
            console.log(res.data)
            navigate('/hoje');
            }
        )
        request.catch(err=>{
            setLoading(false)
            setStatus(true)
        })


    }

    return (
        <StyledSign>
            <img src={Logo} />
            <FormsSignIn
                loggingOn={loggingOn}
                setPassword={e => setPassword(e.target.value)}
                password={password}
                setEmail={e => setEmail(e.target.value)}
                email={email}
                loading={loading}
            />
            {status && <StatusRequest>Usuário e/ou senha inválidos!</StatusRequest>}
            <Link data-identifier="sign-up-action" to="/cadastro">Não tem uma conta? Cadastre-se!</Link>

        </StyledSign>
    )
}

const StatusRequest = styled.h1`
    margin: 10px 0 0 0;
    color: red;
    font-family: 'Lexend Deca', sem serifa;
    font-size: 20px;
`
