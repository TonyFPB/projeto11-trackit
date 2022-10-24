import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Assets/Images/Logo.jpg'
import UserBaseImage from '../Assets/Images/user.jpg'
import { StyledSign } from "../Assets/Styles/Styles"
import FormsSignIn from './FormsSignIn'
import axios from "axios";
import { useState } from 'react';
import styled from 'styled-components';
import useProviders from '../../Providers';

export default function SignIn() {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState(false)
    const [loading, setLoading] = useState(false)
    const { setToken, setUserImage } = useProviders()

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
            let img = new Image()
            img.src = res.data.image
            img.onload = () => setUserImage(res.data.image)
            img.onerror = () => setUserImage(UserBaseImage)
            navigate('/hoje');
        }
        )
        request.catch(err => {
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
