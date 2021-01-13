import styled, { css } from 'styled-components';

const CardSubtitle = styled.div`
  color: #6c757d;
  margin-top: -0.375rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;

  ${(props) =>
    props.primary &&
    css`
      font-size: 1.4rem;
      color: #4e4b66;
      font-weight: 400;
    `}
`;

export default CardSubtitle;
