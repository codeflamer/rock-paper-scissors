import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { addComputerAnswer, addComputerColor, addUserAnswer, addUserColor, getComputerAnswer } from '../features/gameSlice'
import Element from './Element'

const Elements = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const computerOptions = [{name:'paper',color:'--paperFrom'},{name:'scissors',color:'--scissorsFrom'},{name:'rock',color:'--rockFrom'}];
    const dispatch = useDispatch()
    const history = useHistory();
    const compAns = useSelector(getComputerAnswer);

    const handleClick = ({name,color})=>{
        if(name === compAns){
            randomFunc()
        }
        else{
            dispatch(addUserAnswer(name));
            dispatch(addUserColor(color));
            history.push('/decision');
        }
    }
    const randomFunc = () =>{
        const answer = computerOptions[Math.floor(Math.random()*3)];
        dispatch(addComputerAnswer(answer.name))
        dispatch(addComputerColor(answer.color))
    }
    useEffect(()=>{
        randomFunc()
    })

    return (
        <ElementsContainer>
            <ElementsContent>
                <FirstRow> 
                    <Element name='paper' color='--paperFrom' handleClick={handleClick}/>
                    <Element name='scissors' color='--scissorsFrom' handleClick={handleClick}/>
                </FirstRow>
                <SecondRow>
                    <Element name='rock' color='--rockFrom' handleClick={handleClick}/>
                </SecondRow>
            </ElementsContent>
        </ElementsContainer>
    )
}

export default Elements

const ElementsContainer = styled.div`
    margin-top:10px;
`
const ElementsContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    /* justify-content: center; */
`
const FirstRow = styled.div`
    display:flex;
    justify-content:space-between;
    width:500px;
    /* border:1px solid red; */
`
const SecondRow = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    margin-top:30px;
`


