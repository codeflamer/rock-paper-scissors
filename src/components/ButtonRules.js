import React from 'react'
import styled from 'styled-components';

const ButtonRules = () => {
    return (
        <ButtonPosition>
            <ButtonContainer>
                <Button>
                    Rules
                </Button>
            </ButtonContainer>
        </ButtonPosition>
        
    )
}

export default ButtonRules;


const ButtonPosition = styled.div`
    position: absolute;
    bottom:40px;
    width:100%;
`
const ButtonContainer = styled.div`
    display:flex;
    flex-direction: column;  
    margin-top:20px;
    align-items: flex-end;
    /* border:1px solid red; */
    /* width:100%; */
    @media(max-width:550px){
        align-items: center;
    }
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
