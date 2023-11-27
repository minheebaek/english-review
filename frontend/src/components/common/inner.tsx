interface LayoutProps {
  children: React.ReactNode;
}

const Inner: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className="w-full flex-1 pt-[128px] mx-auto px-4 pb-4 
        sm:w-[90%] sm:pt-40 sm:px-0
        md:pt-40
        max-w-[120rem]
        lg:pt-40
    "
    >
      {children}
    </main>
  );
};

export default Inner;
