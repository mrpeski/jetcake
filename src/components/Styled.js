import styled, {createGlobalStyle} from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: props.type,
  name: props.name
}))`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  display: block;
  width: 100%;
  padding: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  margin-bottom: 10px;
  color: hsl(0, 0%, 33%);
  background-color: hsl(0, 0%, 100%);
  background-image: none;
  border: 1px solid hsl(0, 0%, 80%);
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: block;
  font-weight: 800;
`;

const H1 = styled.h1`
  font-size: 48px;
  margin: 20px auto;
  color: white; 
  text-align: center;
  padding: 20px 40px;
  @media all and (min-width: 568px) {
    font-size: 92px;
    padding: 20px;
  }
  
`

const p = styled.p`
  margin: 20px auto;
  color: white; 
  text-align: center;
  padding: 20px 40px;
  @media all and (min-width: 568px) {
    padding: 20px;
    max-width: 560px;
  }
`

const Fold = styled.div`
  position: relative;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
  @media all and (min-width: 568px) {
    max-height: calc(100vh - 75px);
    overflow: hidden;
  }
`

const Overlay = styled.div`
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(3px); 
  text-align: center;
  width:100%; 
  min-height: 100%;
  top: 0;
  padding: 20px;
  z-index: 2; 
  position: absolute;
  @media all and (min-width: 568px) {
    height:100%; 
    overflow: hidden;
  }
`

const Footer = styled.div`
  background: beige;
  text-align: center;
  color: #483939;
  padding: 20px;
  padding-top: 150px;
`

const Button = styled.button.attrs(props => ({
  disabled: props.isDisabled,
}))`
  background: ${props => props.primary ? "chocolate" : "white"};
  color: ${props => props.primary ? "white" : "chocolate"};
  font-size: 1em;
  margin: 1em 0;
  display: block;
  padding: 0.25em 1em;
  cursor: pointer;
  border: 2px solid chocolate;
  border-radius: 3px;
`;

const GlobalStyle = createGlobalStyle`
  a {
    padding: 10px 20px;
    color: gray;
    text-decoration: none;
    transition: color 1s;
    font-weight: 800;
  }
  a:hover, a.active {
    color: blue
  }
  input {
    display: block;
    width: 100%;
    padding: 6px;
    font-size: 1rem;
    box-sizing: border-box;
    margin-bottom: 10px;
    color: hsl(0, 0%, 33%);
    background-color: hsl(0, 0%, 100%);
    background-image: none;
    border: 1px solid hsl(0, 0%, 80%);
  }
  input:focus {
    outline: none;
    border-color: blue
  }
  .tab {
    background: none;
    border: none;
    border-bottom: 1px solid gray;
    cursor: pointer;
    padding: 3px 6px;
  }
  .active {
    color: blue;
    border-color: blue;
  }
  .notice {
    background: rgb(234, 224, 224);
    padding: 5px 10px;
    border-left: 2px solid #d2681e;
    margin-bottom: 20px; color: black;
  }
  button:disabled, input:disabled {
    opacity: 0.3 !important;
    cursor: not-allowed !important;
  } 
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  .isBtn {
    text-align: center;
    background: #ccc;
    display: inline-block;
    margin: 30px
  }
  .hero_image {
    z-index: 1;
    max-height: calc(100vh - 75px);
  }
  @media screen and (min-width: 568px) {
      .hero_image {
          min-width: 100%;
      }
  }
  }
`

export { Input, Button, GlobalStyle, Label, H1, p, Fold, Overlay, Footer };