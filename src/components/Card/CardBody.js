import styled from 'styled-components';

const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  > a {
    &:hover {
      text-decoration: none;
    }
    & + a {
      margin-left: ${(props) => getMargin(props, 'cardBody', 'leftA')};
    }
  }
`;

export default CardBody;
