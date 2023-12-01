import { CardWithContent } from "@/types";
import React from "react";
import CardHeader from "./card-header";

type Props = {
  idx: number;
  data: CardWithContent;
};

const CardItem = ({ data, idx }: Props) => {
  return (
    <div className="shrink-0 w-[300px]">
      <div
        className="w-full rounded-md bg-gradient-to-r from-purple-900/60 to-sky-900/60 shadow-lg pb-2
      text-white
      "
      >
        <CardHeader data={data} />
      </div>
    </div>
  );
};

export default CardItem;
