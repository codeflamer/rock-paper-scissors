import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingContent>

            </LoadingContent>
        </LoadingContainer>
    )
}

export default Loading

const LoadingContainer = styled.div`
    margin-top:20px;
`
const LoadingContent = styled.div`
    /* border:1px solid red; */
    height:270px;
    width: 270px;
    border-radius:100%;
    cursor: pointer;
    background:#182244;
    opacity:1;
    @media(max-width:550px){
        height:150px;
        width: 150px;
    }
`
