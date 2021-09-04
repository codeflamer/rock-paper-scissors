import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getTotalScore } from '../features/gameSlice';

const Score = () => {
    const score = useSelector(getTotalScore);

    return (
        <ScoreContainer>
           <ScoreContent>
               <ScoreText>
                    <h2>ROCK <br/> PAPER <br/> SCISSORS</h2>
               </ScoreText>
               <ScoreValue>
                    <ValueContainer>
                        <span>Score</span>
                        <p>{score}</p>
                    </ValueContainer>
               </ScoreValue>
           </ScoreContent>
        </ScoreContainer>
    )
}

export default Score

const ScoreContainer = styled.div`
    color: white;
    max-width: 800px;
    margin:0px auto;
    position: relative;
    
`
const ScoreContent = styled.div`
    display:flex;
    justify-content: space-between;
    border:3px solid var(--headerOutline);
    border-radius: 15px;
    padding:20px;
    align-items: center;
`
const ScoreText = styled.div`
    h2{
        line-height: 32px;
        font-size:40px;
    }
`
const ScoreValue = styled.div`
    
`
const ValueContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    /* border:1px solid red; */
    border-radius: 5px;
    padding:20px 50px;
    background-color:white;
    span{
        color:var(--scoreText);
    }
    p{
        color:var(--darkText);
        font-size:50px;
        font-weight:700;
    }
`
