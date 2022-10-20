import styled from "styled-components"


export default function Header() {
    return (
        <StyledHeader>
            <h1>TrackIt</h1>
            <img src='https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg' alt='Imagem de perfil' />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Playball', cursiva;
    font-size: 40px;
    color: #FFFFFF;

    img{
        width: 51px;
        height: 51px;
        border-radius: 100px;
    } 
`