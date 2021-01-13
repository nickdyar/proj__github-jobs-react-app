import styled from 'styled-components';

const CursorBlink = styled.span`
  @keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  &::before {
    content: '';
    border: solid blue;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-45deg) translateY(-1px);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
  }
  &::after {
    content: '';
    display: inline-block;
    background-color: blue;
    height: 2px;
    width: 10px;
    margin-left: 0.25em;
    animation: blink 1.1s infinite;
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
  }
`;

export default CursorBlink;
