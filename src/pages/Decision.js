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
                <ContentTop>
                <UserSide>
                    <h3>You Picked</h3>
                    <Element 
                        name={userAns} 
                        image={userImage} 
                        color={userColor} 
                        sizeBig='270px' 
                        sizeSmall='210px'
                        sizeBigMobile='150px'
                        sizeSmallMobile='110px'
                        clickable='false'
                        />
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
                            sizeBig='270px' 
                            sizeSmall='210px' 
                            sizeBigMobile='150px'
                            sizeSmallMobile='110px'
                            clickable='false'
                            />
                    :
                        <Loading/>   
                    }
                    
                </CompSide>
                </ContentTop>
                <ContentBottom>
                    {showResult ? 
                        <EvaluationResultMobile>
                            <h2>{result}</h2>
                            <Button>
                                <Link to='/'>Play Again</Link>
                            </Button>
                        </EvaluationResultMobile>
                    : null}
                </ContentBottom>
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
    @media(max-width:550px){
        padding:0 20px;
    }
`
const AnswerContent = styled.div`
/* border:1px solid red; */
    display:flex;
    flex-direction: column;
`

const ContentTop = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:900px;
    margin:0 auto;
    padding:0 10px;
`
const ContentBottom = styled.div``
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
    @media(max-width:778px){
        display:none;
    }
`

const EvaluationResultMobile = styled.div`
    display:none;
    @media(max-width:778px){
        display:flex;
        flex-direction:column;
        align-items:center;
        h2{
            color:white;
            font-size:55px;
            text-transform: uppercase;
            margin-top:20px;
        }
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
