import type { FC } from "react";

type Props = {
  item: {
    plu: string;
    descp: string;
  };
};

const ItemList: FC<Props> = ({ item }) => {
  return (
    <li className="mb-2">
      <span className="line-clamp-1">
        {item.plu} {item.descp}
      </span>
    </li>
  );
};

export default ItemList;
