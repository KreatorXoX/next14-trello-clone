"use client";

import { CardWithContent } from "@/types";
import CardForm from "./card-form";
import { useEffect, useState } from "react";
import CardItem from "./card-item";
import { Droppable, DragDropContext } from "@hello-pangea/dnd";

type Props = { boardId: string; data: CardWithContent[] };

const CardList = ({ boardId, data }: Props) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);
  return (
    <div className="h-[calc(100vh-10rem)] relative ">
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="cards" type="card" direction="horizontal">
          {(provided) => {
            return (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex gap-4"
              >
                {orderedData.map((card, idx) => {
                  return <CardItem key={card.id} idx={idx} data={card} />;
                })}
                {provided.placeholder}
                <CardForm />
                <div className="flex-shrink-0 w-1 bg-red-500"></div>
              </ul>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default CardList;
