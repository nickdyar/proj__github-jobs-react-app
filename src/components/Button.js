import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;
  background-color: ${(props) => (props.primary ? '#2c00ff' : 'palevioletred')};
  color: ${(props) => (props.primary ? 'palevioletred' : 'white')};
`;
export default Button;
