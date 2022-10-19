import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Assets/Logo.jpg'
import { StyledFormsSign, StyledSign } from "../Assets/Styles/Styles"

export default function SignIn() {
    const navigate = useNavigate()
    function loggingOn(e){
        e.preventDefault();

        navigate('/hoje');
    }
    return (
        <StyledSign>
            <img src={Logo} />
            <StyledFormsSign onSubmit={loggingOn}>
                <input type='email' placeholder='email' required/>
                <input type='password' placeholder='senha' required/>
                <button type='submit'>Entrar</button>
            </StyledFormsSign>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>

        </StyledSign>
    )
}

