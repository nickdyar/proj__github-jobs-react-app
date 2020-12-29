import React from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

// function useToggle(initialOn = false) {

//   const [on, setOn] = useState(initialOn)

//   const toggle = () => setOn(!on)

//   return {on, toggle}

// }
