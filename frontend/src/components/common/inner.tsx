interface LayoutProps {
  children: React.ReactNode;
}

const Inner: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="pt-[88px] mx-auto
        sm:w-[90%]  sm:pt-12
        max-w-[120rem]
        lg:pt-24
    "
    >
      {children}
    </div>
  );
};

export default Inner;
