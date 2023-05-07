import React, { useState } from 'react';

/*==================== SHOW MENU ====================*/
export const useToggle = (initialState) => {
  const [toggleValue, setToggleValue] = useState(initialState);
  const toggler = () => { setToggleValue(!toggleValue) };
  return [toggleValue, toggler]
};