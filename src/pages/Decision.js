import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Element from '../components/Element'
import Loading from '../components/Loading'
import { decreaseTotalScore, 
        getComputerAnswer, 
        getComputerColor, 
        getComputerImage, 
        getUserAnswer, 
        getUserColor, 
        getUserImage, 
        increaseTotalScore } from '../features/gameSlice'

const Decision = () => {
    const [showElement,setShowElement] = useState(false);
    const [result,setResult] = useState();
    const [showResult,setShowResult] = useState(false);
    const userAns= useSelector(getUserAnswer);
    const userColor= useSelector(getUserColor);
    const compAns = useSelector(getComputerAnswer);
    const compColor = useSelector(getComputerColor);
    const compImage = useSelector(getComputerImage);
    const userImage = useSelector(getUserImage);
    const dispatch = useDispatch();
    // console.log(userImage);

    const handleQuery = ()=>{
        if (userAns === 'paper' && compAns === 'rock'){
            dispatch(increaseTotalScore())
            setResult('You Win')
        }
        else if(userAns === 'rock' && compAns === 'scissors'){
            dispatch(increaseTotalScore())
            setResult('You Win')
        }
        else if(userAns === 'scissors' && compAns === 'paper'){
            dispatch(increaseTotalScore())
            setResult('You Win')
        }
        // else if(userAns === compAns) {
        //     history.push('/');
        // }
        else{
            dispatch(decreaseTotalScore())
            setResult('You Lose');
        }
    }
    

    useEffect(()=>{
        setTimeout(function() {
            setShowElement(true);  
            handleQuery()        
        }, 2000)
        setTimeout(function() {
            setShowResult(true);
        },3000)
    },[userAns])

    return (
        <AnswerContainer>
            <AnswerContent>
                <UserSide>
                    <h3>You Picked</h3>
                    <Element 
                        name={userAns} 
                        image={userImage} 
                        color={userColor} 
                        sizeBig='300px' 
                        sizeSmall='220px'/>
                </UserSide>
                {showResult ? 
                    <EvaluationResult>
                        <h2>{result}</h2>
                        <Button>
                            <Link to='/'>Play Again</Link>
                        </Button>
                    </EvaluationResult>
                : null}
                <CompSide>
                    <h3>The House Picked</h3>
                    {showElement ? 
                        <Element 
                            name={compAns} 
                            image={compImage} 
                            color={compColor} 
                            sizeBig='300px' 
                            sizeSmall='220px' />
                    :
                        <Loading/>   
                    }
                    
                </CompSide>
            </AnswerContent>
        </AnswerContainer>
    )
}

export default Decision

const AnswerContainer = styled.div`
    margin-top:30px;
    h3{
        text-transform: uppercase;
        color:white
    }
`
const AnswerContent = styled.div`
/* border:1px solid red; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:900px;
    margin:0 auto;
`
const UserSide = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const CompSide = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const EvaluationResult = styled.div`
display:flex;
flex-direction:column;
align-items:center;
    h2{
        color:white;
        font-size:50px;
        text-transform: uppercase;
    }
`

const Button = styled.button`
    cursor:pointer;
    border-radius: 5px;
    padding:15px 50px;
    outline:none;
    border:0;
    text-transform: uppercase;
    letter-spacing:3px;
    margin-top:10px;
    font-weight: 600;
    a{
        color:var(--darkText);
        text-decoration:none;
    }
`
