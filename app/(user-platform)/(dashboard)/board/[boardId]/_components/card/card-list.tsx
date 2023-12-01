"use client";

import { CardWithContent } from "@/types";
import CardForm from "./card-form";
import { useEffect, useState } from "react";
import CardItem from "./card-item";

type Props = { boardId: string; data: CardWithContent[] };

const CardList = ({ boardId, data }: Props) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);
  return (
    <div className="h-[calc(100vh-10rem)] flex gap-4">
      {orderedData.map((card, idx) => {
        return <CardItem key={card.id} idx={idx} data={card} />;
      })}
      <CardForm />
      <div className="flex-shrink-0 w-1"></div>
    </div>
  );
};

export default CardList;
