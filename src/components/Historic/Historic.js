import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useProviders from "../../Providers";
import { StyledNotLoggedIn } from "../Assets/Styles/Styles";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Historic() {
    const {token} = useProviders()
    const navigate = useNavigate()
    
    if(token === undefined){
        return(
            <StyledHistoric>
                <Header />
                <StyledNotLoggedIn>
                    <h1>Você não esta mais logado!</h1>
                    <button onClick={() => navigate('/')}>Retornar para a tela de login</button>
                </StyledNotLoggedIn>
                <Footer />
            </StyledHistoric>
        )
    }
    return (
        <StyledHistoric>
            <Header />
            <h2>Histórico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Footer />
        </StyledHistoric>
    )
}

const StyledHistoric = styled.div`
    height: 100%;
    margin: 100px 0 70px 0;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    h2{
        font-family: 'Lexend Deca';
        font-size: 22px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    p{
        font-family: 'Lexend Deca';
        font-size: 17px;
        color: #666666;
    }
`