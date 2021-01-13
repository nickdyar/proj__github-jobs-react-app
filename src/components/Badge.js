import styled from 'styled-components';

const Badge = styled.div`
  color: #0b4edb;
  background-color: #c8deff;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 20.1667px;
  border-bottom-color: rgb(11, 78, 219);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-width: 0;
  border-image-width: 1;
  border-left-color: rgb(11, 78, 219);
  border-left-width: 0;
  border-right-color: rgb(11, 78, 219);
  border-right-width: 0;
  border-top-color: rgb(11, 78, 219);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top-width: 0;
  margin-top: 5px;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 6px;
  padding-left: 6px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:not(:first-child) {
    margin-right: 4px;
  }
`;

export default Badge;
