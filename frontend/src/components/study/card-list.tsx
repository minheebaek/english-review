import clsx from "clsx";
import Card from "./card";
import List from "./list";

interface CardListProps {
  type: "list" | "card";
}

const CardList: React.FC<CardListProps> = ({ type }) => {
  return (
    <section
      className={clsx(
        `px-4 my-4`,
        type === "card"
          ? `grid gap-y-2 grid-cols-1 justify-items-center
        sm:grid-cols-2 sm:px-0 sm:my-8 sm:justify-items-start
        xl:grid-cols-3 xl:gap-4`
          : `grid gap-y-2 grid-cols-1 justify-items-center
          lg:grid-cols-2 sm:px-0 sm:my-8 sm:gap-2 sm:justify-items-start
          `
      )}
    >
      {[1, 2, 3, 4, 5].map((el) => {
        if (type === "card") {
          return <Card key={el} />;
        } else {
          return <List key={el} />;
        }
      })}
    </section>
  );
};

export default CardList;
