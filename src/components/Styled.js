import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: props.type,
  name: props.name
}))`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  display: block;
  // width: 100%;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  display: block;
  // width: 100%;
  padding: 0.25em 1em;
  cursor: pointer;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export {Input, Button};