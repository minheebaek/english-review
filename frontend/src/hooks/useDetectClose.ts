import { useEffect, useState, SetStateAction, Dispatch } from "react";

const useDetectClose = (
  elem: any,
  initialState: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  useEffect(() => {
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (elem.current !== null && !elem.current.contains(event.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", () => onClick);
    }

    return () => {
      window.removeEventListener("click", () => onClick);
    };
  }, [isOpen, elem]);
  return [isOpen, setIsOpen];
};

export default useDetectClose;
