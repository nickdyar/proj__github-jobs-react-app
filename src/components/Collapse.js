import styled from 'styled-components';
import React, { useState, useRef } from 'react';

function Collapse(props) {
  const [setActive, setActiveState] = useState('');

  const content = useRef(null);

  function openCollapse() {
    setActiveState(setActive === '' ? 'active' : '');
    console.log(content.current.scrollHeight);
  }

  return ()




}

export default Collapse;