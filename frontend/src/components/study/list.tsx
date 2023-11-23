const List = () => {
  return (
    <div className="flex justify-center cursor-pointer hover:opacity-70 transition-opacity">
      <div className="relative flex gap-x-4 flex-rowspace-x-5 space-y-3 rounded-xl shadow-lg p-3  max-w-3xl mx-auto border border-white bg-white">
        <div className="hidden w-1/2 md:w-1/4 sm:grid place-items-center">
          <img
            src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="tailwind logo"
            className="rounded-xl"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <h3 className="font-black text-gray-800 md:text-2xl text-xl">
            나의 첫 영어 공부
          </h3>
          <div className="card-actions justify-end text-sm text-neutral">
            2023.11.23에 작성
          </div>
          <p className="md:text-lg text-gray-500 text-base">
            The best kept secret of The Bahamas is the country’s sheer size and
            diversity. With 16 major islands, The Bahamas is an unmatched
            destination
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
