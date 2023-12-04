import { CardContent } from "@prisma/client";
import React from "react";
import { Draggable } from "@hello-pangea/dnd";
type Props = { data: CardContent; idx: number };

const ContentItem = ({ data, idx }: Props) => {
  return (
    <Draggable draggableId={data.id} index={idx}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="truncate bg-white/90 text-sm text-neutral-700 p-2 rounded hover:bg-white hover:ring-2 cursor-pointer hover:ring-neutral-700 transition"
          >
            {data.title}
          </div>
        );
      }}
    </Draggable>
  );
};

export default ContentItem;
