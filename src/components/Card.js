import styled from 'styled-components';

const Card = styled.article`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  background-color: #f1f5f8;
  /* background-color: #f5f6fa; */
  word-wrap: break-word;
  margin-bottom: 1rem;
  padding: 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  /* border: 1px solid hsl(240, 8%, 72%); */
  border-radius: 0.25rem;
  min-width: 0;
  max-width: 640px;
`;

export default Card;
