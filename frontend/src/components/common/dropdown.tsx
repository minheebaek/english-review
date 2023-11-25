import React from "react";

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  return <article>{children}</article>;
};

export default Dropdown;
