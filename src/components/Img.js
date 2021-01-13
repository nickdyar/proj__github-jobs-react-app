import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
  object-fit: contain;
  /* object-fit: cover; */
  image-orientation: none;
  border-style: none;
  min-height: 10px;
  max-height: 30px;
  mix-blend-mode: multiply;
  filter: saturate(1) brightness(1.2);
`;

function Img({ className, src, alt }) {
  return <StyledImg className={className} src={src} alt={alt} />;
}

// require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Img.defaultProps = {
  className: ``,
};

export default Img;
