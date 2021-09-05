import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Element = ({name,color,handleClick,sizeBig,sizeSmall,image}) => {
    const theme = {
        main: color,
        sizeBig: sizeBig,
        sizeSmall: sizeSmall,
      };
    return (
        <ElementContainer onClick={()=>handleClick({name,color,image})}>
            <ThemeProvider theme={theme}>
            <OuterCircle>
                <InnerCircle>
                    {/* <p>{name}</p> */}
                    <img src={`../${image}`} alt='name'/>
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
    width:${props => props.theme.sizeBig};
    height:${props => props.theme.sizeBig};
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
    width:${props => props.theme.sizeSmall};
    height:${props => props.theme.sizeSmall};
    border-radius:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:white;
    z-index: 1;
    img{
        height:100px;
        width:100px;
    }
`;
