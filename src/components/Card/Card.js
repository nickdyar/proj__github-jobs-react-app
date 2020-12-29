import styled from 'styled-components';

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
  border-radius: 4px;
  border: 1px solid hsl(240, 8%, 72%);
  min-width: 0;
  background-clip: border-box;
  margin-bottom: 1rem;
`;

export default Card;
