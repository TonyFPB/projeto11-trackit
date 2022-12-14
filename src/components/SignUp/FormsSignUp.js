import { ThreeDots } from "react-loader-spinner";
import { StyledFormsSign } from "../Assets/Styles/Styles";
export default function FormsSignUp(props) {
    const { registering, inputController, email, password, name, image, loading } = props

    return (
        <StyledFormsSign onSubmit={registering}>
            <input
                data-identifier="input-email"
                onChange={inputController}
                value={email}
                id="email"
                type='email'
                placeholder='email'
                required
            />
            <input
            data-identifier="input-password"
                onChange={inputController}
                value={password}
                id="password"
                type='password'
                placeholder='senha'
                required
            />
            <input
            data-identifier="input-name"
                onChange={inputController}
                value={name}
                id="name"
                type='text'
                placeholder='nome'
                required
            />
            <input
             data-identifier="input-photo"
                onChange={inputController}
                value={image}
                id="image"
                type='url'
                placeholder='foto'
                required
            />

            <button disabled={loading} type='submit'>
                {loading ?
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
                    "Cadastrar"
                }
            </button>
        </StyledFormsSign>
    )
}