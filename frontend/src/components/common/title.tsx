interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center sm:text-left">
      <h1 className=" text-xl sm:text-2xl lg:text-3xl font-bold">{title}</h1>
      <p className="mt-1 text-neutral">{subtitle}</p>
    </div>
  );
};

export default Title;
