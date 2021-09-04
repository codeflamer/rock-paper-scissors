import React from 'react'
import styled from 'styled-components'
import Element from '../components/Element'

const Decision = () => {
    return (
        <AnswerContainer>
            <AnswerContent>
                <h3>You Picked</h3>
                <Element name='scissors' color='--scissorsFrom'/>
            </AnswerContent>
        </AnswerContainer>
    )
}

export default Decision

const AnswerContainer = styled.div``
const AnswerContent = styled.div``
