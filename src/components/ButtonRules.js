import React from 'react'
import styled from 'styled-components';

const ButtonRules = () => {
    return (
        <ButtonContainer>
            <Button>
                Rules
            </Button>
        </ButtonContainer>
    )
}

export default ButtonRules;

const ButtonContainer = styled.div`
    /* border: 1px solid red; */
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top:20px;
`
const Button = styled.button`
    width:150px;
    padding:10px 30px;
    color:white;
    cursor:pointer;
    background: transparent;
    outline: none;
    border:1px solid white;
    text-transform: uppercase;
    border-radius:5px;
    letter-spacing:4px;
    font-weight: 600;
    position: relative;
    margin-right:30px;
;
`
