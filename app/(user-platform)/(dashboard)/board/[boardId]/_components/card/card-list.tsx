"use client";

import { CardWithContent } from "@/types";
import CardForm from "./card-form";
import { useEffect, useState } from "react";
import CardItem from "./card-item";
import { Droppable, DragDropContext, DropResult } from "@hello-pangea/dnd";
import reorder from "@/config/reorder";

type Props = { boardId: string; data: CardWithContent[] };

const CardList = ({ boardId, data }: Props) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDragEndHandler = (result: DropResult) => {
    const { destination, source, type } = result;

    if (result.combine) {
      if (result.type === "card") {
        const shallow: CardWithContent[] = [...orderedData];
        shallow.splice(result.source.index, 1);
        setOrderedData(shallow);
        return;
      }
    }

    // dropped nowhere
    if (!destination) {
      return;
    }

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering cards
    if (result.type === "card") {
      const ordered = reorder(orderedData, source.index, destination.index).map(
        (card, idx) => ({ ...card, order: idx })
      );

      setOrderedData(ordered);
      // update in the backend later
      return;
    }

    // reordering content
    if (result.type === "content") {
      let data = [...orderedData];

      // source and destination cards has to be checked and re-evaluated
      const sourceCard = data.find((card) => card.id === source.droppableId);
      const destinationCard = data.find(
        (card) => card.id === destination.droppableId
      );

      // if one of the cards doesnt exist
      if (!sourceCard || !destinationCard) {
        return;
      }

      // moving content in the same card
      if (source.droppableId === destination.droppableId) {
        const reorderedContents = reorder(
          sourceCard.contents,
          source.index,
          destination.index
        ).map((content, idx) => ({ ...content, order: idx }));

        sourceCard.contents = reorderedContents;
        setOrderedData(data);
        // update in the backend later
        return;
      } else {
        // this is the case of content being dropped to a different card

        const [movedContent] = sourceCard.contents.splice(source.index, 1);
        movedContent.cardId = destination.droppableId;

        // add content to the new card
        destinationCard.contents.splice(destination.index, 0, movedContent);

        const updatedSourceCard = sourceCard.contents.map((content, idx) => ({
          ...content,
          order: idx,
        }));

        const updatedDestinationCard = destinationCard.contents.map(
          (content, idx) => ({ ...content, order: idx })
        );
        setOrderedData(data);
      }

      return;
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="cards" type="card" direction="horizontal">
        {(provided) => {
          return (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex gap-4 overflow-x-auto 
               scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-violet-600/40 scrollbar-track-neutral-600/50
              h-[80vh]"
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
  );
};

export default CardList;
