import { StyledSign, StyledFormsSign } from ".././Assets/Styles/Styles";
import Logo from '../Assets/Logo.jpg'
import { Link } from 'react-router-dom'


export default function SignUp() {
    return (
        <StyledSign>
            <img src={Logo} />
            <StyledFormsSign>
                <input type='email' placeholder='email' required />
                <input type='password' placeholder='senha' required />
                <input type='text' placeholder='nome' required/>
                <input type='url' placeholder='foto' required/>
                <button disabled={false} type='submit'>Entrar</button>
            </StyledFormsSign>
            <Link to="/">Já é cadastrado? Faça o login!</Link>
        </StyledSign>
    )
}