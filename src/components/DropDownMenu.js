import React from 'react';
import data from "../data/data";

import useToggle from "../hooks/useToggle";
import useEscape from "../hooks/useEscape";

const DropDownMenu = () => {
  const [open, toggle] = useToggle(false);
  const onCloseMenu = () => toggle(false);
  useEscape(onCloseMenu);

  const elmDropDown = React.useRef(null);
  const setElmDropDown = (elm) => elmDropDown.current = elm;

  // useClickOutSide()

  return (
    <div ref={setElmDropDown}>
      <button onClick={toggle}>Toggle drop down</button>
      {
        open ?
          <ul>
            {data.map((item) => {
              return <li key={item.id} onClick={onCloseMenu}>{item.name}</li>
            })}
          </ul> : ""
      }
    </div >
  );
};

export default DropDownMenu;