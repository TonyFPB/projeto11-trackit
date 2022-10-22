import styled from "styled-components"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <StyledFooter>
            <Link to={'/habitos'}>
                <h1>Hábitos</h1>
            </Link>
            <Link to={'/hoje'}>
                <StyledProgressBar>
                    <CircularProgressbar
                        value={50}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={{
                            background: {
                                fill: "#52B6FF"
                            },
                            text: {
                                fill: "#fff"
                            },
                            path: {
                                stroke: "#fff"
                            },
                            trail: { stroke: "transparent" }
                        }}
                    />
                </StyledProgressBar>
            </Link>
            <h1>Histórico</h1>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca';

    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
        text-decoration: none;
    }
    h1{font-size: 18px;
    color: #52B6FF;}
`
const StyledProgressBar = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
`
