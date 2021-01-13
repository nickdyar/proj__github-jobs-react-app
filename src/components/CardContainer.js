// import React from 'react';
// import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';
import styled from 'styled-components';

// function CardContainer({ className }) {
//   return <div className={className} />;
// }

// CardContainer.propTypes = {
//   className: PropTypes.string.isRequired,
// };

// export default styled(CardContainer)`
//   ${(props) => css``}
// `;

const CardContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: auto;
  grid-gap: 0 2rem;
`;

export default CardContainer;
