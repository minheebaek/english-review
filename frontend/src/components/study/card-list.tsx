import clsx from "clsx";
import Card from "./card";
import Loading from "../common/loading";

import { useMyStudiesQuery } from "../../hooks/use-study";
import { useFakeMyStudiesQuery } from "../../hooks/use-fake-study";

interface CardListProps {
  type: "list" | "card";
}

const CardList: React.FC<CardListProps> = ({ type }) => {
  // const { data, isLoading, isError } = useMyStudiesQuery();
  const {
    data: myStuidies,
    isLoading,
    isError,
    isSuccess,
  } = useFakeMyStudiesQuery();

  return (
    <section>
      {isLoading && (
        <div
          className="w-full min-h-[400px] flex flex-col px-3 items-center justify-center gap-y-3 
          sm:min-h-[500px] sm:gap-8
          "
        >
          <Loading size="lg" type="dots" />
          <h2 className=" text-md  sm:text-xl text-primary ">
            복습 가져오는 중...
          </h2>
        </div>
      )}
      {!isLoading && !myStuidies && !isError && (
        <div
          className="w-full min-h-[400px] flex flex-col px-3 items-center justify-center gap-y-4 
          sm:min-h-[500px] sm:gap-8
          "
        >
          <h2 className=" text-md  text-neutral sm:text-xl ">
            아직 복습을 시작하지 않았어요 시작해 볼까요?
          </h2>
          <button className="btn btn-wide btn-primary">시작하기</button>
        </div>
      )}
      {isError && (
        <div
          className="w-full min-h-[400px] flex flex-col px-3 items-center justify-center gap-y-4 
          sm:min-h-[500px] sm:gap-8
          "
        >
          <h2 className=" text-md  text-neutral sm:text-xl ">
            데이터를 가져오는 도중 에러가 발생했어요
          </h2>
        </div>
      )}

      {isSuccess && (
        <ul
          className={clsx(
            `px-4 my-4`,
            type === "card"
              ? `grid gap-2 grid-cols-1 justify-items-center
        sm:grid-cols-2 sm:px-0 sm:my-8 sm:justify-items-start sm:gap-3
        md:grid-cols-3
        xl:grid-cols-4 xl:gap-4`
              : `grid gap-y-2 grid-cols-1 justify-items-center
          lg:grid-cols-2 sm:px-0 sm:my-8 sm:gap-2 sm:justify-items-start
          `
          )}
        >
          {myStuidies &&
            myStuidies.searchList.map((study) => {
              return <Card key={study.boardNumber} data={study} type={type} />;
            })}
        </ul>
      )}
    </section>
  );
};

export default CardList;
