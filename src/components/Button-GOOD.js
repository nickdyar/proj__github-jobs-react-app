import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #007bff;
  color: #007bff;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: #007bff;
      color: white;
    `}
`;

const Button = () => {
  return (
    <>
      <StyledButton>Normal Button</StyledButton>
      <StyledButton primary>Primary Button</StyledButton>
    </>
  );
};

export default Button;
