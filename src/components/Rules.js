import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { closeButton } from '../features/gameSlice';

const Rules = () => {

    const dispatch = useDispatch();

    const handleClose = () =>{
        dispatch(closeButton(false));
    }

    return (
        <>
        <RulesBackground>
                This is for the rules
            </RulesBackground>
            <RulesContainer>
                
                <RulesContent>
                    <RulesContentContainer>
                        <RulesTop>
                            <h3>RULES</h3>
                            <img src='../images/icon-close.svg' alt='closeBtn'onClick={handleClose}/>
                        </RulesTop>
                        <img src='../images/image-rules.svg'  alt='images'/>
                    </RulesContentContainer>
                </RulesContent>
            </RulesContainer>
            
        </>
    )
}

export default Rules


const RulesBackground = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:black;
    opacity: .7;
    z-index:100;
`
const RulesContainer = styled.div`
    z-index:1000;
    position: absolute;
    top:0;
    bottom:0;
    width:100%;
    cursor:pointer;
`
const RulesContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
`
const RulesContentContainer = styled.div`
    background: white;
    padding:20px;
    border-radius:20px;
    margin:0 auto;
`

const RulesTop = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom: 20px;
    align-items:center;
    h3{
        font-size: 30px;
        color:var(--darkText);
    }
`
