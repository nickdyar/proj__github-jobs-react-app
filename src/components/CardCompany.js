import React from 'react';
import styled from 'styled-components';

const StyledCardCompany = styled.div`
  font-size: 1.6rem;
  color: #4e4b66;
  font-weight: 400;
`;

const CardDate = ({ children }) => {
  return (
    <>
      <StyledCardCompany>{children}</StyledCardCompany>
    </>
  );
};

export default CardDate;
