import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="w-full bg-primary mx-auto
        sm:w-[90%]
        max-w-[120rem]
    "
    >
      {children}
    </div>
  );
};

export default Layout;
