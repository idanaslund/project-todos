import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import startpage from "images/startpage.jpg"

const Section = styled.section`
    margin-top: 50px;
`

const Container = styled.div`
    width: 375px;
    margin: 0 auto;
`

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const StartButton = styled.button`
    padding: 6px;
    width: 300px;
    border-radius: 10px;
    margin: 7px 0 25px 0;
    border: solid 3px #4C4EF9;
    background-color: rgb(216, 216, 239);
    color: #4C4EF9;
    font-family: 'Acme', sans-serif;
    font-size: 16px;
    cursor: pointer;

    &:active {
        background-color: #4C4EF9;
        color:white;
    }    
    `
    
    
const StartPage = () => {
    return (
        <Section>
            <Container>
                <WrapperDiv>
                <img src={startpage} alt="people with big dartboard" width="375px"/>
                <p>Do you have trouble keeping track of your life?
                    Stop worrying, we are here to help
                </p>
                <Link to="/main">
                <StartButton>
                        Start planning
                </StartButton>
                </Link>
                </WrapperDiv>
            </Container>
        </Section>

    )
}

export default StartPage