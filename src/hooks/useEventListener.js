import React from 'react';

const useEventListener = (eventName, handler, options = false, target = document) => {
  React.useEffect(() => {
    target.addEventListener(eventName, handler, options)

    return () => {
      target.removeEventListener(eventName, handler, options)
    }
  })
};

export default useEventListener;