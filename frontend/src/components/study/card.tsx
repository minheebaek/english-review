import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  date: string;
  content: string;
}

const Card = () => {
  const nav = useNavigate();
  const handleSwitch = () => {};
  return (
    <div
      onClick={() => nav(`/mystudy/${123}`)}
      className="relative card w-full bg-base-100 shadow-xl cursor-pointer max-w-xs
    xl:max-w-sm
    hover:opacity-50 transition-opacity
    "
    >
      <figure>
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Shoes"
          className="w-full h-52"
        />
      </figure>
      <div className="card-body border-t-2">
        <h2 className="card-title text-xl">나의 첫 영어 공부</h2>
        <div className="card-actions justify-end text-sm text-neutral">
          2023.11.23에 작성
        </div>

        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      {/* <div className="absolute top-3 right-3 z-10">
        <input type="checkbox" className="toggle toggle-primary" />
      </div> */}
    </div>
  );
};

export default Card;
