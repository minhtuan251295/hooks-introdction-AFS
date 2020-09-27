import useEventListener from "./useEventListener";

const ESCAPE_CODE = 27;
const useEscape = (callback) => {
  const handler = (e) => {
    if (e.keyCode === ESCAPE_CODE) {
      callback()
    }
  }
  useEventListener("keydown", handler)
};

export default useEscape;