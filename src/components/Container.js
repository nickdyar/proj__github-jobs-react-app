import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ContainerWrapper = styled.section`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Container = ({ props, children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

// Container.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Container;
