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
    height:300px;
    width: 300px;
    border-radius:100%;
    cursor: pointer;
    background:#182244;
    opacity:1
`
