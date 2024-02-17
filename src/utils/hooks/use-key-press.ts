import { useEffect } from "react";

type Keys =
  | "Escape"
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Enter"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F8"
  | "F9";

type Options = {
  targetListener?: "keyup" | "keydown" | "keypress";
};

export const useKeyPress = (
  targetKey: Keys,
  fn: () => void | Promise<void>,
  options: Options = {},
) => {
  const { targetListener = "keyup" } = options;

  function downHandler({ key }: any) {
    if (key === targetKey) {
      fn();
    }
  }

  useEffect(() => {
    window.addEventListener(targetListener, downHandler);
    return () => {
      window.removeEventListener(targetListener, downHandler);
    };
  }, []);
};
