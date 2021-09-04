import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --BgFrom:hsl(214, 47%, 23%);
        --BgTo:hsl(237, 49%, 15%);
        --darkText:hsl(229, 25%, 31%);
        --scoreText:hsl(229, 64%, 46%);
        --headerOutline:hsl(217, 16%, 45%);
        --scissorsFrom:hsl(39, 89%, 49%);
        --scissorsTo:hsl(40, 84%, 53%);
        --paperFrom:hsl(230, 89%, 62%);
        --rockFrom:hsl(349, 71%, 52%);
    }   
    *{
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }
  body {
    margin: 0;
    padding-top: 20px;
    box-sizing:border-box;
    background: radial-gradient(var(--BgFrom),var(--BgTo)) no-repeat;
    height:100vh;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size:18px;
    color:var(--textColor);
    @media(max-width:768px){
      font-size:15px;
    }
  }

  /* a{
      color:var(--text-color);
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
  } */

`;
 
export default GlobalStyle;