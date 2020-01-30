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
  button:disabled {
    opacity: 0.3 !important;
    cursor: not-allowed !important;
  } 
`

export { Input, Button, GlobalStyle, Label };