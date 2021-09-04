import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Element = ({name,color,handleClick}) => {
    const theme = {
        main: color
      };
    return (
        <ElementContainer onClick={()=>handleClick(name)}>
            <ThemeProvider theme={theme}>
            <OuterCircle>
                <InnerCircle>
                    <p>{name}</p>
                </InnerCircle>
            </OuterCircle>
            </ThemeProvider>
        </ElementContainer>
    )
}

export default Element

const ElementContainer = styled.div`
    margin-top:20px;
    cursor: pointer;
`

const OuterCircle = styled.div`
    /* border:1px solid red; */
    width:200px;
    height:200px;
    border-radius:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:var(${props => props.theme.main});
    z-index:-1;
`;
const InnerCircle = styled.div`
    /* border:1px solid blue; */
    width:150px;
    height:150px;
    border-radius:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:white;
    z-index: 1;
`;
