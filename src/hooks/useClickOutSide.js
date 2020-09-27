import React from 'react';
import useEventListener from './useEventListener';

const useClickOutSide = (ref, callback) => {
  const handler = (e) => {

  }
  useEventListener("click", handler)
};

export default useClickOutSide;