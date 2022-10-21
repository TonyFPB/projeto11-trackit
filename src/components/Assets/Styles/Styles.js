import styled from "styled-components"

export const StyledFormsSign = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    input{
        width: 303px;
        height: 45px;
        margin: 0 0 8px 0;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 21px;
        font-family: 'Lexend Deca', sans-serif;   
    }
    
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        color:#FFFF;
        border-style: none;
        border-radius: 5px;
    }
`

export const StyledSign= styled.div`
    background-color: #FFFF;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 180px;
        margin: 0 0 33px 0;
    }
    a{
        margin: 25px 0 0 0;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #52B6FF;
    }
`
