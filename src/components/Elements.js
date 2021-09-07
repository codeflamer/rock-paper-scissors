import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Element from './Element'
import { addCompImage, 
        addComputerAnswer, 
        addComputerColor, 
        addUserAnswer, 
        addUserColor, 
        addUserImage, 
        getComputerAnswer } from '../features/gameSlice'


const Elements = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const computerOptions = [
        {name:'paper',color:'--paperFrom',image:'images/icon-paper.svg'},
        {name:'scissors',color:'--scissorsFrom',image:'images/icon-scissors.svg'},
        {name:'rock',color:'--rockFrom',image:'images/icon-rock.svg'}
    ];
    const dispatch = useDispatch()
    const history = useHistory();
    const compAns = useSelector(getComputerAnswer);

    const handleClick = ({name,color,image})=>{
        if(name === compAns){
            const list = computerOptions.find((value)=>(
                value.name === compAns
            ))
            var indexValue = computerOptions.indexOf(list);
            if (indexValue === 2){
                indexValue = 0
            }
            else{
                indexValue = indexValue + 1
            }
            randomFunc(indexValue)
            handleuserDispatch(name,image,color);
        }
        else{
            handleuserDispatch(name,image,color);
        }
    }
    const handleuserDispatch = (name,image,color)=>{
            dispatch(addUserAnswer(name));
            dispatch(addUserImage(image));
            dispatch(addUserColor(color));
            history.push('/decision');
    }
    const randomFunc = (arg) =>{
        const answer = computerOptions[arg];
        dispatch(addComputerAnswer(answer.name))
        dispatch(addComputerColor(answer.color))
        dispatch(addCompImage(answer.image))
    }

    useEffect(()=>{
        randomFunc(Math.floor(Math.random()*3))
    })

    return (
        <ElementsContainer>
            <ElementsContent>
                <FirstRow> 
                    <Element 
                        name='paper' 
                        color='--paperFrom' 
                        image='images/icon-paper.svg' 
                        handleClick={handleClick} 
                        sizeBig='200px' 
                        sizeSmall='150px' 
                        sizeBigMobile='150px'
                        sizeSmallMobile='110px'
                        clickable='true'
                        />
                    <Element 
                        name='scissors' 
                        color='--scissorsFrom' 
                        image='images/icon-scissors.svg'  
                        handleClick={handleClick} 
                        sizeBig='200px' 
                        sizeSmall='150px' 
                        sizeBigMobile='150px'
                        sizeSmallMobile='110px'
                        clickable='true'
                        />
                </FirstRow>
                <SecondRow>
                    <Element 
                        name='rock' 
                        color='--rockFrom' 
                        image='images/icon-rock.svg' 
                        handleClick={handleClick} 
                        sizeBig='200px' 
                        sizeSmall='150px' 
                        sizeBigMobile='150px'
                        sizeSmallMobile='110px'
                        clickable='true'
                        />
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
    padding:0 20px;
    /* border:1px solid red; */
    /* justify-content: center; */
`
const FirstRow = styled.div`
    /* border:1px solid red;    */
    display:flex;
    justify-content:space-between;
    width:100%;
    max-width:600px;
    /* border:1px solid red; */
`
const SecondRow = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    margin-top:30px;
`


