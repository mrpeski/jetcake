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
  font-size: 92px;
  margin: 20px auto;
  color: white; 
  text-align: center ;
`

const p = styled.p`
  margin: 20px auto;
  color: white; 
  text-align: center;
  max-width: 560px;
`

const Fold = styled.div`
  position: relative;
  max-height: calc(100vh - 75px);
  overflow: hidden;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
`

const Overlay = styled.div`
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(3px); 
  text-align: center;
  width:100%; 
  height:100%; 
  z-index: 2; 
  position: absolute;
`

const Footer = styled.div`
  background: beige;
  text-align: center;
  color: #483939;
  padding: 20px;
  min-height: 200px;
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

  .row {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .col {
    flex: 1 1 8%;
    margin: 0 0 0.5rem 0;
    padding: 0.5em 10px;
    box-sizing: border-box;
  }
  
  /* nested grids */
  .row .row, .row.nested {
    flex: 1 1 auto;
    margin-top: -0.5em;
  }
  
  /* full width grids */
  .row.wide-fit {
    margin-left: -10px;
    margin-right: -10px;
  }
  
  /* center grids */
  .row.center {
    justify-content: center;
  }
  
  .center .col {
    flex-grow: 0;
    flex-shrink: 0;
  }
  
  /* columns widths */
  
  .col-span-1 {
    flex-basis: 8.3333%;
  }
  
  .col-span-2 {
    flex-basis: 16.6666%; 
  }
  
  .col-span-3 {
    flex-basis: 25%;
  }
  
  .col-span-4 {
    flex-basis: 33.3333%;
  }
  
  .col-span-5 {
    flex-basis: 41.6666%;
  }
  
  .col-span-6 {
    flex-basis: 50%;
  }
  
  .col-span-7 {
    flex-basis: 58.3333%;
  }
  
  .col-span-8 {
    flex-basis: 66.6666%;
  }
  
  .col-span-9 {
    flex-basis: 75%;
  }
  
  .col-span-10 {
    flex-basis: 83.3333%;
  }
  
  .col-span-11 {
    flex-basis: 91.6666%;
  }
  
  .col-span-12 {
    flex-basis: 100%;
  }
  
  /* examples */
  
  .fixed-width {
    flex: 0 0 500px;
    background-color: rgba(255,0,0,0.1) !important;
  }
  
  @media all and (max-width: 568px) {
    .col-span-1,
    .col-span-2,
    .col-span-3,
    .col-span-4,
    .col-span-5 {
      flex-basis: 50%;
    }
  
    .col-span-6,
    .col-span-7,
    .col-span-8,
    .col-span-9,
    .col-span-10,
    .col-span-11 {
      flex-basis: 100%;
    }
  
    .nested .col {
      flex-basis: 100%;
    }
    
  }
`

export { Input, Button, GlobalStyle, Label, H1, p, Fold, Overlay, Footer };