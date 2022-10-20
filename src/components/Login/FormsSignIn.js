import { StyledFormsSign } from "../Assets/Styles/Styles"
import { ThreeDots } from 'react-loader-spinner'

export default function FormsSignIn(props) {
    const { loggingOn, setEmail, email, setPassword, password, loading } = props

    return (
        <StyledFormsSign onSubmit={loggingOn}>
            <input
                data-identifier="input-email"
                onChange={setEmail}
                value={email}
                type='email'
                placeholder='email'
                required
            />
            <input
                data-identifier="input-password"
                onChange={setPassword}
                value={password}
                type='password'
                placeholder='senha'
                required
            />
            <button data-identifier="login-btn" type='submit' disabled={loading}>
                {loading
                    ?
                    <ThreeDots
                        height="40"
                        width="40"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                    :
                    "Entrar"
                }
            </button>
        </StyledFormsSign>
    )
}
