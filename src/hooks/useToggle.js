import React from 'react';

const useToggle = (defaultValue = false) => {
  const [isOpen, setOpen] = React.useState(defaultValue);

  const toggle = (value) => {
    setOpen(typeof value === "boolean" ? value : !isOpen)
  }

  return [isOpen, toggle]
};

export default useToggle;