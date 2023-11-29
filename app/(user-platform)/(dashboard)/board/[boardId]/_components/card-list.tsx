"use client";

import { CardWithContent } from "@/types";
import CardForm from "./card-form";

type Props = { boardId: string; data: CardWithContent[] };

const CardList = ({ boardId, data }: Props) => {
  return (
    <div>
      <CardForm />
      <div className="flex-shrink-0 w-1"></div>
    </div>
  );
};

export default CardList;
