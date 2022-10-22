import { StyledSign } from "../Assets/Styles/Styles";
import Logo from '../Assets/Logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import FormsSignUp from "./FormsSignUp";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [status, setStatus] = useState('')
    const [statusColor, setStatusColor] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    function inputController(idInput, valueInput) {
        switch (idInput) {
            case "email":
                setEmail(valueInput)
                break;
            case "password":
                setPassword(valueInput)
                break;
            case "name":
                setName(valueInput)
                break;
            case "image":
                setImage(valueInput)
                break;
            default:
                break;
        }
    }

    function registering(e) {
        console.log('To dentro')
        e.preventDefault();
        setLoading(true)
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body = {
            email,
            password,
            name,
            image
        }
        
        const request = axios.post(URL,body)
        request.then(res=>{
                setLoading(false)
                setStatus('Usuário cadastrado')
                setStatusColor('green')
                navigate('/')
            }
        )
        request.catch(err=>{
            setLoading(false)
            setStatusColor('red')
            if(err.data === 400){
                setStatus(err.response.data.message)
            }else{
                setStatus('Preencha os dados corretamente!')
            }
            // console.log(err.response)
            }
        )
    }
    return (
        <StyledSign>
            <img src={Logo} />
            <FormsSignUp
                email={email}
                password={password}
                name={name}
                image={image}
                loading={loading}
                inputController={e => inputController(e.target.id, e.target.value)}
                registering={registering}
            />
            
            {status && <StatusRequest fontColor={statusColor}>{status}</StatusRequest>}
            <Link to="/">Já é cadastrado? Faça o login!</Link>
        </StyledSign>
    )
}

const StatusRequest = styled.h1`
    margin: 10px 0 0 0;
    color: ${props=>props.fontColor};
    font-family: 'Lexend Deca', sem serifa;
    font-size: 20px;
`