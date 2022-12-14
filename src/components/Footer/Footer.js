import styled from "styled-components"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import useProviders from "../../Providers";

export default function Footer() {
    const { percentProgress } = useProviders()
    return (
        <StyledFooter>
            <Link data-identifier="habit-page-action" to={'/habitos'}>
                <h1>Hábitos</h1>
            </Link>
            <Link to={'/hoje'}>
                <StyledProgressBar>
                    <CircularProgressbar
                        value={percentProgress}
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
            <Link data-identifier="historic-page-action" to={"/historico"}>
                <h1>Histórico</h1>
            </Link>
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
