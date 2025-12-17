import type { FC } from "react";

type Props = {
  item: {
    plu: string;
    descp: string;
  };
};

const ItemList: FC<Props> = ({ item }) => {
  return (
    <li className="lg:mb-2 text-sm lg:text-lg">
      <span className="line-clamp-1">
        {item.plu} {item.descp}
      </span>
    </li>
  );
};

export default ItemList;
