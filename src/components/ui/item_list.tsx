import type { FC } from "react";

type Props = {
  item: {
    plu: string;
    descp: string;
  };
};

const ItemList: FC<Props> = ({ item }) => {
  return (
    <li>
      <span>
        {item.plu} {item.descp}
      </span>
    </li>
  );
};

export default ItemList;
